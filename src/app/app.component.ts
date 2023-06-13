import {Component} from '@angular/core';
import {Observable, fromEvent, takeWhile} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    private move$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mousemove');
    private isResizing: boolean = false;
    private navWidth: number = 144;

    public getNavWidth(): object {
        return {'width': `${this.navWidth}px`};
    }

    public getArticleWidth(): object {
        return {'width': `calc(100% - ${this.navWidth}px)`};
    }

    public startResizing(): void {
        this.isResizing = true;
        this.move$.pipe(takeWhile(() => this.isResizing))
            .subscribe((mouseData: MouseEvent): void => {
                this.navWidth = mouseData.clientX
            });
    }

    public endResizing(): void {
        this.isResizing = false;
    }
}
