import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-nav-checkbox',
    templateUrl: './nav-checkbox.component.html',
    styleUrls: ['./nav-checkbox.component.scss']
})
export class NavCheckboxComponent {

    @Input('name') public checkboxName: string = "";
    @Input('iconName') private iconName: string = "";
    @Input('isActive') private isChecked: boolean = false;
    @Input('isLocked') private isLocked: boolean = false;

    public changeActiveState(): void {
        if(!this.isLocked) this.isChecked = !this.isChecked;
    }

    public getCheckboxClass(): string {
        return this.isChecked
            ? `active`
            : `not-active`;
    }

    public getIconClass(): string {
        return this.isChecked
            ? `${this.iconName}`
            : `${this.iconName}`;
    }
}
