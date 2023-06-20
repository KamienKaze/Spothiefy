import {Injectable} from '@angular/core';
import {LocalStorageManagerService} from "../local-storage-manager/local-storage-manager.service";
import {BehaviorSubject} from "rxjs";

const NAV_BREAKPOINT: number = 17.6; //rem

@Injectable({
    providedIn: 'root'
})

export class NavWidthManagerService {

    public static navWidth: BehaviorSubject<number> = new BehaviorSubject<number>(NavWidthManagerService.getInitialNavWidth());
    private static fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);
    public static isNavCollapsed: boolean = false;

    private static convertRemToPx(rem: number) {
        return rem * this.fontSize;
    }

    public static getInitialNavWidth(): number {
        return LocalStorageManagerService.getFromLocalStorage('navWidth', NavWidthManagerService.convertRemToPx(NAV_BREAKPOINT));
    }

    public static updateNavWidth(newNavWidth: number): void {

        if(newNavWidth < this.convertRemToPx(NAV_BREAKPOINT)) {
            this.expandLibrary();
            LocalStorageManagerService.setLocalStorage('navWidth', this.convertRemToPx(NAV_BREAKPOINT));
        } else {
            this.navWidth.next(newNavWidth);
            LocalStorageManagerService.setLocalStorage('navWidth', newNavWidth);
        }
    }

    public static expandLibrary(): void {
        this.navWidth.next(NavWidthManagerService.convertRemToPx(NAV_BREAKPOINT));
        this.isNavCollapsed = false;
    }

    public static collapseLibrary(): void {
        this.navWidth.next(0);
        this.isNavCollapsed = true;
    }
}
