import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MusicPlayerService {

    private static audio: HTMLAudioElement = new Audio();
    public static audioSrc: string = `./../../../assets/tracks/NF_-_MOTTO.mp3`;

    public static audioDuration$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public static audioCurrentTime$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public static isPlaying$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public static songThumbnail$: BehaviorSubject<string> = new BehaviorSubject<string>(".\\..\\..\\..\\assets\\thumbnails\\nfmotto.jpg");
    public static songName$: BehaviorSubject<string> = new BehaviorSubject<string>("MOTTO");
    public static artist$: BehaviorSubject<string> = new BehaviorSubject<string>("NF");

    private static loadNewAudio(newAudio: string): void {
        MusicPlayerService.audio.src = newAudio;
        this.audio.load();
    }

    public static playNewSong(audioSrc: string, thumbnailSrc: string, artist: string, title: string): void {
        MusicPlayerService.loadNewAudio(audioSrc);
        this.songThumbnail$.next(thumbnailSrc);
        this.songName$.next(title);
        this.artist$.next(artist);
        this.playAudio();
        MusicPlayerService.isPlaying$.next(true);
    }

    public static pauseAudio(): void {
        MusicPlayerService.audio.pause();
        MusicPlayerService.isPlaying$.next(false);
    }

    public static playAudio(): void {
        MusicPlayerService.audio.play();
        MusicPlayerService.isPlaying$.next(true);
    }

    public static setAudioVolume(newVolume: number): void {
        this.audio.volume = newVolume;
    }

    public static updateAudioProgress(currentTime: number): void {
        this.audio.currentTime = currentTime;
    }

    constructor() {
        MusicPlayerService.audio.addEventListener("timeupdate", (): void => {
            MusicPlayerService.audioCurrentTime$.next(MusicPlayerService.audio.currentTime);
        });

        MusicPlayerService.audio.addEventListener("canplay", (): void => {
            MusicPlayerService.audioDuration$.next(MusicPlayerService.audio.duration);
        });

        MusicPlayerService.audio.addEventListener("ended", (): void => {
            MusicPlayerService.isPlaying$.next(false);
            MusicPlayerService.audioCurrentTime$.next(0);
        });

        MusicPlayerService.loadNewAudio(`./../../../assets/tracks/nfhope.mp3`);
        MusicPlayerService.songThumbnail$.next(`./../../../assets/thumbnails/nfhope.jpg`);
        MusicPlayerService.songName$.next(`HOPE`);
        MusicPlayerService.artist$.next(`NF`);
    }
}
