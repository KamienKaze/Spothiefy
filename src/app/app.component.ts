import {Component} from '@angular/core';
import {Observable, fromEvent, takeWhile} from "rxjs";

const MOUSE_MOVEMENT$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mousemove');
const NAV_BREAKPOINT: number = /*17.6*/ 0; //rem

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    private fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);
    private navWidth: number = this.getFromLocalStorage('navWidth', this.convertRemToPx(NAV_BREAKPOINT));
    private isResizing: boolean = false;

    private getFromLocalStorage(name: string, def: number): number {
        return Number.parseInt(localStorage.getItem(name) ?? `${def}`);
    }

    private convertRemToPx(rem: number) {
        return rem * this.fontSize;
    }

    public getNavWidth(): object {
        return {"width": `${this.navWidth}px`};
    }

    public getArticleWidth(): object {
        return {"width": `calc(100% - ${this.navWidth}px)`};
    }

    public getCursor(): object {
        return this.isResizing
            ? {cursor: 'ew-resize'}
            : {cursor: 'auto'};
    }

    private onWidthUpdate(): void {
        localStorage.setItem('navWidth', `${this.navWidth}`);
    }

    public startResizing(): void {
        this.isResizing = true;
        this.updateNavWidth();
    }

    private updateNavWidth(): void {
        MOUSE_MOVEMENT$.pipe(takeWhile(() => this.isResizing)).subscribe((next: MouseEvent): void => {
            if(next.clientX > this.convertRemToPx(NAV_BREAKPOINT)) {
                this.navWidth = next.clientX;
            } else {
                this.navWidth = this.convertRemToPx(NAV_BREAKPOINT);
            }

            this.onWidthUpdate();
        });
    }

    public endResizing(): void {
        this.isResizing = false;
    }
}
