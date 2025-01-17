import { Component } from '@angular/core';
import {ColorProviderService} from "../../../colors-provider/color-provider.service";
import {MusicPlayerService} from "../../../services/music-player/music-player.service";

const MAX_INPUT_VALUE = 100;
const MIN_INPUT_VALUE = 0;
const VOLUME_ICON_PATH = `./assets/icons/volume`;

@Component({
  selector: 'app-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.scss']
})
export class VolumeControlComponent {
  iconChangeOn: Array<number> = [
    0, 1, 40, 80
  ];

  public isHovered: boolean = false;
  public inputValue: number = this.getFromLocalStorage('inputValue', MAX_INPUT_VALUE);
  private previousValueState: number = this.getFromLocalStorage('inputValue', this.inputValue);

  constructor() {
    MusicPlayerService.setAudioVolume(this.inputValue / 100);
  }

  private getFromLocalStorage(name: string, def: number): number {
    return Number.parseInt(localStorage.getItem('inputValue') ?? `${def}`);
  }


  public getVolumeIcon(): string {
    return `${VOLUME_ICON_PATH}.svg#${this.getIconType()}`
  }

  public onInputUpdate(): void {
    localStorage.setItem('previousValueState', `${this.previousValueState}`);
    localStorage.setItem('inputValue', `${this.inputValue}`);
    this.previousValueState = this.inputValue;
    MusicPlayerService.setAudioVolume(this.inputValue / 100);
  }

  public isMuted(): boolean {
    return this.inputValue === MIN_INPUT_VALUE;
  }

  private isPreviousMuted(): boolean {
    return this.previousValueState === MIN_INPUT_VALUE;
  }

  private resetValue() {
    this.inputValue = MAX_INPUT_VALUE;
  }

  private muteValue() {
    this.inputValue = MIN_INPUT_VALUE;
  }

  private ifVolumeAndPreviousValueStateIsMutedBoostVolume(): boolean {
    if (!this.isPreviousMuted()) {
      return false;
    }

    this.resetValue()
    return true;
  }

  private restoreValueFromPreviousValue(): void {
    this.inputValue = this.previousValueState;
  }

  private restoreOrVolumeMax(): boolean {
    return this.isMuted() ? this.helperForRestoreOrVolumeMax() : false;
  }

  private helperForRestoreOrVolumeMax(): boolean {
    if (this.ifVolumeAndPreviousValueStateIsMutedBoostVolume()) {
      return true;
    }

    this.restoreValueFromPreviousValue();
    return true;
  }

  public muteButtonAction(): void {
    if (!this.restoreOrVolumeMax()) {
      this.muteValue();
    }
    localStorage.setItem('previousValueState', `${this.previousValueState}`);
    localStorage.setItem('inputValue', `${this.inputValue}`);
    MusicPlayerService.setAudioVolume(this.inputValue / 100);
  }

  private getIconType(): number {
    return this.iconChangeOn.reduce(
        (
            accumulator: number,
            currentValue: number,
            currentIndex: number
        ): number =>
            currentValue <= this.inputValue
                ? currentIndex
                : accumulator, 0
    );
  }

  public setOnHoverStyles(): object {
    return {
      background: this.isHovered
          ? `linear-gradient(to right, ${ColorProviderService.getAccent100} ${this.inputValue}%, ${ColorProviderService.getPrimary300} ${this.inputValue}%)`
          : `${ColorProviderService.getPrimary300}`
    };
  }
}
