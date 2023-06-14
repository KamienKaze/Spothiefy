import {Component} from '@angular/core';
import {Observable, fromEvent, takeWhile} from "rxjs";

const MOUSE_MOVEMENT$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mousemove');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    private isResizing: boolean = false;
    private mouseX: number = 0;

    public getNavWidth(): object {
        return {"width": `${this.mouseX}px`};
    }

    public getArticleWidth(): object {
        return {"width": `calc(100% - ${this.mouseX}px)`};
    }

    public getCursor(): object {
        return this.isResizing
            ? {cursor: 'ew-resize'}
            : {cursor: 'auto'};
    }

    public startResizing(): void {
        this.isResizing = true

        MOUSE_MOVEMENT$.pipe(takeWhile(() => this.isResizing)).subscribe((next: MouseEvent) => {
            this.mouseX = next.clientX;
            console.log(this.mouseX);
        });
    }

    public endResizing(): void {
        this.isResizing = false;
    }
}
