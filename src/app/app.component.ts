import {Component} from '@angular/core';
import {Observable, fromEvent, takeWhile, Subscription} from "rxjs";
import {NavWidthManagerService} from "./services/nav-width-manager/nav-width-manager.service";

const MOUSE_MOVEMENT$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mousemove');
const NAV_BREAKPOINT: number = NavWidthManagerService.getNavBreakpoint(); //rem
const NAV_MIN_WIDTH: number = NavWidthManagerService.getNavMinWidth(); //rem
const NAV_MAX_WIDTH: number = NavWidthManagerService.getNavMaxWidth(); //rem


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    private navWidth: number = 0;
    private isNavExpanded: boolean = false;
    private isResizing: boolean = false;

    public getNavStyles(): object {
        return this.isNavExpanded
            ? { 'max-width': `${NAV_MAX_WIDTH}rem`,
                'min-width': `${NAV_BREAKPOINT}rem`,
                "width": `${this.navWidth}px` }
            : { 'max-width': `${NAV_MIN_WIDTH}rem`,
                'min-width': `${NAV_MIN_WIDTH}rem`,
                "width": `${this.navWidth}px`};
    }

    public getArticleWidth(): object {
        return {"width": `calc(100% - ${this.navWidth}px)`};
    }

    public getCursor(): object {
        return this.isResizing
            ? {cursor: 'col-resize'}
            : {cursor: 'auto'};
    }

    public startResizing(): void {
        this.isResizing = true;
        this.updateNavWidth();
    }

    public endResizing(): void {
        this.isResizing = false;
    }

    private updateNavWidth(): void {
        MOUSE_MOVEMENT$.pipe(takeWhile(() => this.isResizing)).subscribe((mouseData: MouseEvent): void => {
            NavWidthManagerService.updateNavWidth(mouseData.clientX);
        });
    }

    ngOnInit(): void {
        NavWidthManagerService.navWidthSubject.subscribe((navWidth: number): void => {
            this.navWidth = navWidth;
        });
        NavWidthManagerService.isNavExpandedSubject.subscribe((isNavExpanded: boolean): void => {
            this.isNavExpanded = isNavExpanded;
        });
    }
}
