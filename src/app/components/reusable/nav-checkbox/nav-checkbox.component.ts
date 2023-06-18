import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-nav-checkbox',
    templateUrl: './nav-checkbox.component.html',
    styleUrls: ['./nav-checkbox.component.scss']
})
export class NavCheckboxComponent {

    @Input('name') public name: string = '';
    @Input('isActive') private isActive: boolean = false;
    @Input('isLocked') private isLocked: boolean = false;

    public changeActiveState(): void {
        this.isActive = !this.isActive;
        console.log(this.isActive);
    }

    public getCLass(): string {
        return this.isActive
            ? 'active'
            : '';
    }
}
