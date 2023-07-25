import {Component} from '@angular/core';
import {MusicPlayerService} from "../../../services/music-player/music-player.service";
import {NavWidthManagerService} from "../../../services/nav-width-manager/nav-width-manager.service";

const BUTTON_ICON_PATH = `assets/icons/player-controls`;
const PLAY_ICON_FILE_NAME = `play`;
const PAUSE_ICON_FILE_NAME = `pause`;
const NEXT_ICON_FILE_NAME = `next`;
const PREV_ICON_FILE_NAME = `prev`;

const ICON_PATHS = {
    "playIcon": `${BUTTON_ICON_PATH}.svg#${PLAY_ICON_FILE_NAME}`,
    "pauseIcon": `${BUTTON_ICON_PATH}.svg#${PAUSE_ICON_FILE_NAME}`,
    "nextIcon": `${BUTTON_ICON_PATH}.svg#${NEXT_ICON_FILE_NAME}`,
    "prevIcon": `${BUTTON_ICON_PATH}.svg#${PREV_ICON_FILE_NAME}`
};

@Component({
    selector: 'app-track-controls',
    templateUrl: './track-controls.component.html',
    styleUrls: ['./track-controls.component.scss']
})
export class TrackControlsComponent {

    public isPlaying: boolean = false;

    // Song data in seconds
    public songDuration: number = 0;
    public songProgress: number = 0;

    // Progress bar
    public isHovered: boolean = false;


    public getPlayIcon(): string {
        return ICON_PATHS['playIcon'];
    }

    public getPauseIcon(): string {
        return ICON_PATHS['pauseIcon'];
    }

    public getNextIcon(): string {
        return ICON_PATHS['nextIcon'];
    }

    public getPrevIcon(): string {
        return ICON_PATHS['prevIcon'];
    }

    public playPauseOnClick(): void {
        this.isPlaying = !this.isPlaying;
        this.isPlaying
            ? MusicPlayerService.playAudio()
            : MusicPlayerService.pauseAudio();
    }

    private calculateTime(time: number) {
        let minutes = Math.trunc(time / 60);
        let seconds = time - (minutes * 60);

        if (seconds < 10) {
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

    public setOnHoverStyles(): any {

        let percents: number = (this.songProgress / this.songDuration) * 100;

        return {
            background: this.isHovered
                ? `linear-gradient(to right, #1db954 ${percents}%, #4d4d4d ${percents}%)`
                : `#4d4d4d`
        };
    }

    public updateSongProgress(): void {
        MusicPlayerService.updateAudioProgress(this.songProgress);
    }

    ngOnInit(): void {
        MusicPlayerService.audioCurrentTime$.subscribe((songProgress: number): void => {
            this.songProgress = Math.round(songProgress);
        });
        MusicPlayerService.audioDuration$.subscribe((audioDuration: number): void => {
            this.songDuration = Math.round(audioDuration);
        });
        MusicPlayerService.isPlaying$.subscribe((isPlaying: boolean): void => {
            this.isPlaying = isPlaying;
        });
    }
}
