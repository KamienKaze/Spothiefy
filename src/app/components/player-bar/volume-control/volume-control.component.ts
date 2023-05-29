import {Component} from '@angular/core';

@Component({
    selector: 'volume-control',
    templateUrl: './volume-control.component.html',
    styleUrls: ['./volume-control.component.scss']
})

interface StyleList {
    [index: string]: unknown;
}

const MAX_INPUT_VALUE = 100;
const MIN_INPUT_VALUE = 0;
export class VolumeControlComponent {
    iconChangeOn: Array<number> = [
        0, 40, 80
    ];

    private inputValue: number = MAX_INPUT_VALUE;
    private currentIcon: number = 3;
    private previousValueState: number = MAX_INPUT_VALUE;
    private isHovered: boolean = false;

    private style: StyleList = {
        backgroundColor: this.isHovered
            ? 'black'
            : 'white'
    }

    private onInputUpdate(): void {
        this.previousValueState = this.inputValue;
        this.trigger();
    }

    private getInputValue(): number {
        return this.previousValueState !== MIN_INPUT_VALUE
            ? this.previousValueState : MAX_INPUT_VALUE;
    }

    private muteButton(): void {
        this.inputValue = MIN_INPUT_VALUE;
        this.inputValue = this.getInputValue();

        this.trigger();
    }

    private trigger(): void {
        this.iconUpdate();
    }

    private iconUpdate(): void {
        this.iconChangeOn.forEach(this.getIconByValue);
    }

    private getIconByValue(value: number, index: number) {
        if (this.inputValue >= value) {
            this.inputValue = index;
        }
    }
}
