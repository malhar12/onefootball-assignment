import { Component, Output, EventEmitter } from '@angular/core';
import { PAService } from './../../services/player.service';
import { NgForm } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { FormEventDetails } from 'src/app/models/model';

@Component({
    selector: 'pa-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class PAFormComponent {

    playerId: string;
    @Output('onPlayerDetails') onPlayerDetails: EventEmitter<FormEventDetails>;
    
    constructor(private paService: PAService) {
        this.onPlayerDetails = new EventEmitter<FormEventDetails>();
        this.playerId = '';
    }

    
    onSubmit(form: NgForm): void {
        console.log(form.value, 'On Form Submit');

        this.paService.getPlayerAvailibilityById(form.value.playerId)
            .pipe(
                mergeMap(playerData => {
                    if(!playerData.active)
                        throw new Error('Player is Not Available');
                    
                    return this.paService.getPlayerDetailsById(playerData.profileId);
                })
            )
            .subscribe(playerDetails => {
                console.log(playerDetails, 'Player Data');
                this.onPlayerDetails.emit({
                    status: true,
                    details: playerDetails,
                    message: 'ok'
                });
            }, error => {
                this.onPlayerDetails.emit({
                    status: false,
                    details: null,
                    message: error.name !== 'Error' ? 'Invalid Player ID' : error.message
                });
            });
    }
}