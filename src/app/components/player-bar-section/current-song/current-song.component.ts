import { Component } from '@angular/core';
import {MusicPlayerService} from "../../../services/music-player/music-player.service";

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.scss']
})
export class CurrentSongComponent {
  public img_src: string = "";
  public artist: string = "";
  public title: string = "";

  ngOnInit() {
    MusicPlayerService.songThumbnail$.subscribe((img_src: string): void => {
      this.img_src = img_src;
    });
    MusicPlayerService.artist$.subscribe((artist: string): void => {
      this.artist = artist;
    });
    MusicPlayerService.songName$.subscribe((title: string): void => {
      this.title = title;
    });
  }
}
