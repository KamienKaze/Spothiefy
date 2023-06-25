import {Component} from '@angular/core';
import {NavWidthManagerService} from "../../services/nav-width-manager/nav-width-manager.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-nav-section',
    templateUrl: './nav-section.component.html',
    styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent {

    public isHomeCheckboxActive: boolean = true;
    public isHomeCheckboxLocked: boolean = true;

    public isLibraryCheckboxActive: boolean = false;
    public isLibraryCheckboxLocked: boolean = false;

    public libraryOnClick(): void {
        this.isLibraryCheckboxActive
            ? NavWidthManagerService.expandNavButton()
            : NavWidthManagerService.collapseNav();
    }

    ngOnInit(): void {
        NavWidthManagerService.isNavExpandedSubject.subscribe((isExpanded: boolean): void => {
            this.isLibraryCheckboxActive = isExpanded;
        });
    }
}
