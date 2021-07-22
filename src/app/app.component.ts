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
  constructor() {
    this.activePlayerDetails = {
      status: false,
      details: null,
      message: ''
    };
  }

  displayPlayerDetails(event: FormEventDetails): void {
    this.activePlayerDetails = event;
  }
}
