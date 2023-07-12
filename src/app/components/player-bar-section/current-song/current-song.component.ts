import { Component } from '@angular/core';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.scss']
})
export class CurrentSongComponent {
  public img_src: string = ".\\..\\..\\..\\assets\\thumbnails\\NF_-_HOPE.jpg";
  public artist: string = "NF";
  public title: string = "HOPE";
}
