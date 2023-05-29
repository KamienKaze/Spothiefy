import {Component} from '@angular/core';

interface StyleList {
    [index: string]: unknown;
}

const MAX_INPUT_VALUE = 100;
const MIN_INPUT_VALUE = 0;
const VOLUME_ICON_PATH = `./assets/icons/volume`;

@Component({
    selector: 'volume-control',
    templateUrl: './volume-control.component.html',
    styleUrls: ['./volume-control.component.scss']
})
export class VolumeControlComponent {
    iconChangeOn: Array<number> = [
        0, 25, 50, 75
    ];

    public inputValue: number = MAX_INPUT_VALUE;
    private previousValueState: number = MAX_INPUT_VALUE;
    public isHovered: boolean = false;

    public getVolumeIcon(): string {
        return `${VOLUME_ICON_PATH}/${this.getIconType()}.svg`
    }
    public getInputStyle(): StyleList {
        return {
            backgroundColor: this.isHovered
                ? '#444'
                : '#111'
        };
    }
    public onInputUpdate(): void {
        this.previousValueState = this.inputValue;
    }


    public muteButton(): void {
        this.inputValue = MIN_INPUT_VALUE;
    }

    private getIconType(): number {
        return this.iconChangeOn.reduce(
            (
                accumulator: number,
                currentValue: number,
                currentIndex: number
            ) =>
                currentValue <= this.inputValue
                    ? currentIndex
                    : accumulator, 0
        );

    }
}
