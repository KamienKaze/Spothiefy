import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-nav-section',
    templateUrl: './nav-section.component.html',
    styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent {

    public isHomeCheckboxActive: boolean = false;
    public isHomeCheckboxLocked: boolean = false;

    public isLibraryCheckboxActive: boolean = true;
    public isLibraryCheckboxLocked: boolean = false;
}
