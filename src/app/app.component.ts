import {Component} from '@angular/core';
import {Observable, fromEvent, takeWhile, Subscription} from "rxjs";
import {NavWidthManagerService} from "./services/nav-width-manager/nav-width-manager.service";

const MOUSE_MOVEMENT$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mousemove');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    private navWidthSubscription: Subscription = NavWidthManagerService.navWidth.subscribe((width: number): void => {
        this.navWidth = width;
    });

    private navWidth: number = NavWidthManagerService.getInitialNavWidth();
    private isResizing: boolean = false;

    public getNavWidth(): object {
        return {"width": `${this.navWidth}px`};
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
}
