import { Component } from '@angular/core';

@Component({
  selector: 'track-controls',
  templateUrl: './track-controls.component.html',
  styleUrls: ['./track-controls.component.scss']
})
export class TrackControlsComponent {
  isPlaying: boolean = false;

  changePlayingState() {
    this.isPlaying = !this.isPlaying;
  }
}
