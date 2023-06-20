import {Component} from '@angular/core';
import {NavWidthManagerService} from "../../services/nav-width-manager/nav-width-manager.service";

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

    public onClickLibrary(): void {
        NavWidthManagerService.isNavCollapsed
            ? NavWidthManagerService.expandLibrary()
            : NavWidthManagerService.collapseLibrary();
    }
}
