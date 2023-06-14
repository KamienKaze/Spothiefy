import {Component, Input} from '@angular/core';

const ICON_DIRECTORY_PATH: string = `./../../../assets/icons/`;
const ICON_ACTIVE_NAME: string = `true.svg`;
const ICON_NOT_ACTIVE_NAME: string = `false.svg`;

@Component({
    selector: 'nav-checkbox',
    templateUrl: './nav-checkbox.component.html',
    styleUrls: ['./nav-checkbox.component.scss']
})
export class NavCheckboxComponent {

    @Input('src') public iconPath: string = ``;
    @Input('name') public name: string = ``;

    public isActive: boolean = false;

    public getIconClass(): string {
        return `${this.iconPath}-${this.isActive}`
    }
}