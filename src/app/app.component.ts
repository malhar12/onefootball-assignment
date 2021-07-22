import { FormEventDetails, PlayerDetails } from './models/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'player-archive';
  activePlayerDetails: FormEventDetails;
  activePlayerStatKeys: Array<string>;
  constructor() {
    this.activePlayerDetails = {
      status: false,
      details: null,
      message: ''
    };
    this.activePlayerStatKeys = [];
  }

  displayPlayerDetails(event: FormEventDetails): void {
    this.activePlayerDetails = event;

    if(this.activePlayerDetails.details && this.activePlayerDetails.details.stats)
      this.activePlayerStatKeys = Object.keys(this.activePlayerDetails.details?.stats);
  }
}
