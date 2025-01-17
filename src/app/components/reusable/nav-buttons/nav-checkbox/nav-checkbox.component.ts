import {Component, Input} from '@angular/core';

const ICONS_DIRECTORY: string = "assets/icons/";

@Component({
    selector: 'app-nav-checkbox',
    templateUrl: './nav-checkbox.component.html',
    styleUrls: ['./nav-checkbox.component.scss']
})
export class NavCheckboxComponent {

    @Input('name') public name: string = '';
    @Input('isLocked') private isLocked: boolean = false;
    @Input() private isActive: boolean = false;

    public isHovered: boolean = false;

    public getIconPath(): string {
        return this.isActive
            ? `${ICONS_DIRECTORY}${this.name}.svg#true`
            : `${ICONS_DIRECTORY}${this.name}.svg#false`;
    }

    public getActiveClass(): object {
        return { "active": this.isHovered };
    }

    public setHoverProperty(isHovered: boolean): void {
        this.isHovered = isHovered;
    }
}
