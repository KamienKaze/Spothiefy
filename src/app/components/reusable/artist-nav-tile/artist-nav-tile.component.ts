import {Component, Input} from '@angular/core';
import {MusicPlayerService} from "../../../services/music-player/music-player.service";

@Component({
  selector: 'app-artist-nav-tile',
  templateUrl: './artist-nav-tile.component.html',
  styleUrls: ['./artist-nav-tile.component.scss']
})
export class ArtistNavTileComponent {
  @Input("name") public artistName: string = "";
  @Input("img") public imgSrc: string = "";

  private currentArtist: string = "";
  private isPlaying: boolean = false;

  public isCurrentlyPlaying(): boolean {
    return this.currentArtist == this.artistName;
  }

  ngOnInit(): void {
    MusicPlayerService.artist$.subscribe(res => {
      this.currentArtist = res;
    });
    MusicPlayerService.isPlaying$.subscribe(res => {
      this.isPlaying = res;
    });
  }
}
