import {Component} from '@angular/core';
import {NavWidthManagerService} from "../../services/nav-width-manager/nav-width-manager.service";
import {NavigationEnd, NavigationSkipped, NavigationStart, ResolveStart, Router} from "@angular/router";
import {MusicPlayerService} from "../../services/music-player/music-player.service";
import {UrlManagerService} from "../../services/urlManager/url-manager.service";

@Component({
    selector: 'app-nav-section',
    templateUrl: './nav-section.component.html',
    styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent {

    constructor(private router: Router, private urlManager: UrlManagerService) {
        urlManager.artists$.subscribe(res => {
            this.artists = res;
        });
    }

    public artists: any = [];

    private currentUrl: string = '';

    public isHomeCheckboxActive: boolean = false;
    public isHomeCheckboxLocked: boolean = false;

    public isLibraryCheckboxActive: boolean = false;
    public isLibraryCheckboxLocked: boolean = false;

    public updateHomeState(): void {
        this.isHomeCheckboxActive = this.currentUrl == '/home' || this.currentUrl == '/';
    }

    public libraryOnClick(): void {
        if(this.isLibraryCheckboxLocked) return;
        this.isLibraryCheckboxActive = !this.isLibraryCheckboxActive;

        this.isLibraryCheckboxActive
            ? NavWidthManagerService.expandNavButton()
            : NavWidthManagerService.collapseNav();
    }

    ngOnInit(): void {
        NavWidthManagerService.isNavExpandedSubject$.subscribe((isExpanded: boolean): void => {
            this.isLibraryCheckboxActive = isExpanded;
        });

        this.router.events.subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.currentUrl = event.url;
            }

            this.updateHomeState();
        });
    }
}
