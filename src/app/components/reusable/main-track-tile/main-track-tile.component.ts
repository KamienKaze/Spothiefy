import {Component, Input} from '@angular/core';
import {MusicPlayerService} from "../../../services/music-player/music-player.service";

@Component({
  selector: 'app-main-track-tile',
  templateUrl: './main-track-tile.component.html',
  styleUrls: ['./main-track-tile.component.scss']
})
export class MainTrackTileComponent {
  @Input("name") public name: string = "";
  @Input("image-url") public imageSrc: string = "";
  @Input("track-url") public trackSrc: string = "";
  @Input("artist") public artist: string = "";

  private currentSong: string = "";
  private currentArtist: string = "";

  public isCurrentlyPlaying: boolean = false;

  public playNewSong(): void {
    MusicPlayerService.playNewSong(this.trackSrc, this.imageSrc, this.artist, this.name);
  }

  public isPlaying(): boolean {
    return this.currentSong == this.name && this.currentArtist == this.artist;
  }

  ngOnInit() {
    MusicPlayerService.songName$.subscribe(res => {
      this.currentSong = res;
    });
    MusicPlayerService.artist$.subscribe(res => {
      this.currentArtist = res;
    });
    MusicPlayerService.isPlaying$.subscribe(res => {
      this.isCurrentlyPlaying = res;
    });
  }
}
