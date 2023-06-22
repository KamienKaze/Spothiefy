import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-nav-checkbox',
    templateUrl: './nav-checkbox.component.html',
    styleUrls: ['./nav-checkbox.component.scss']
})
export class NavCheckboxComponent {

    @Input('name') public name: string = '';
    @Input('isLocked') private isLocked: boolean = false;
    @Input() private isActive: boolean = false;
    @Output() private isActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public changeActiveState(): void {
        if(!this.isLocked) this.isActive = !this.isActive;
        this.isActiveChange.emit(this.isActive);
    }

    public getCLass(): string {
        return this.isActive
            ? 'active'
            : '';
    }
}
