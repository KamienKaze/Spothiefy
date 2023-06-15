import {Component} from '@angular/core';

@Component({
    selector: 'app-library-section',
    templateUrl: './library-section.component.html',
    styleUrls: ['./library-section.component.scss']
})
export class LibrarySectionComponent {
    private isCollapsed: boolean = false;

    public getTooltipText(): string {
        return this.isCollapsed
            ? 'Expand'
            : 'Collapse';
    }
}
