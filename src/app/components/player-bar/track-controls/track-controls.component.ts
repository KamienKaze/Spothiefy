import { Component } from '@angular/core';
import {min} from "rxjs";

const BUTTON_ICON_PATH = `./assets/icons/buttons`;
const PLAY_ICON_FILE_NAME = `play`;
const PAUSE_ICON_FILE_NAME = `pause`;
const NEXT_ICON_FILE_NAME = `next`;
const PREV_ICON_FILE_NAME = `prev`;

const ICON_PATHS = {
  "playIcon": `${BUTTON_ICON_PATH}/${PLAY_ICON_FILE_NAME}.svg`,
  "pauseIcon": `${BUTTON_ICON_PATH}/${PAUSE_ICON_FILE_NAME}.svg`,
  "nextIcon": `${BUTTON_ICON_PATH}/${NEXT_ICON_FILE_NAME}.svg`,
  "prevIcon": `${BUTTON_ICON_PATH}/${PREV_ICON_FILE_NAME}.svg`
};

@Component({
  selector: 'track-controls',
  templateUrl: './track-controls.component.html',
  styleUrls: ['./track-controls.component.scss']
})
export class TrackControlsComponent {
  public isPlaying: boolean = false;

  // Song data in seconds
  public songDuration: number = 242;
  public songProgress: number = 0;

  public changePlayingState() {
    this.isPlaying = !this.isPlaying;
  }

  public getPlayIcon(): string {
    return ICON_PATHS.playIcon;
  }
  public getPauseIcon(): string {
    return ICON_PATHS.pauseIcon;
  }
  public getNextIcon(): string {
    return ICON_PATHS.nextIcon;
  }
  public getPrevIcon(): string {
    return ICON_PATHS.prevIcon;
  }

  private calculateTime(time: number) {
    let minutes = Math.trunc(time / 60);
    let seconds = time - (minutes * 60);

    if(seconds < 10) {
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  public getSongProgress(): string {
    return this.calculateTime(this.songProgress);
  }
  public getSongDuration(): string {
    return this.calculateTime(this.songDuration);
  }


}
