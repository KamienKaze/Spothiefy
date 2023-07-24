import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-artist-nav-tile',
  templateUrl: './artist-nav-tile.component.html',
  styleUrls: ['./artist-nav-tile.component.scss']
})
export class ArtistNavTileComponent {
  @Input("name") public artistName: string = "";
  @Input("img") public imgSrc: string = "";
}
