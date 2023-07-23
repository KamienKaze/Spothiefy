import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-track-tile',
  templateUrl: './main-track-tile.component.html',
  styleUrls: ['./main-track-tile.component.scss']
})
export class MainTrackTileComponent {
  @Input("artist") public artist: string = "";
  @Input("image-url") public imageSrc: string = "";
}
