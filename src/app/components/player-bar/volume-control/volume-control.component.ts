import {Component} from '@angular/core';

@Component({
    selector: 'volume-control',
    templateUrl: './volume-control.component.html',
    styleUrls: ['./volume-control.component.scss']
})

interface StyleList {
    [index: string]: unknown;
}

export class VolumeControlComponent {
    iconChangeOn = [
        0, 40, 80
    ];

    private inputValue: number = 100;
    private currentIcon: number = 3;
    private previousValueState: number = this.inputValue;
    private isHovered: boolean = false;

    private styleOnHovered: StyleList = {
        backgroundColor: 'black'
    }
    private styleOnNotHovered: StyleList = {
        backgroundColor: 'white'
    }

    private onInputUpdate(): void {
        this.previousValueState = this.inputValue;
        this.trigger();
    }

    private getInputValue(): number {
        return this.previousValueState !== 0 ? this.previousValueState : 100;
    }

    private muteButton(): void {
        this.inputValue = 0;
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
