import {Injectable} from '@angular/core';
import {LocalStorageManagerService} from "../local-storage-manager/local-storage-manager.service";

const NAV_BREAKPOINT: number = 17.6; //rem

@Injectable({
    providedIn: 'root'
})

export class NavWidthManagerService {

    private static navWidth: number = LocalStorageManagerService.getFromLocalStorage('navWidth', NavWidthManagerService.convertRemToPx(NAV_BREAKPOINT));
    private static fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

    private static convertRemToPx(rem: number) {
        return rem * this.fontSize;
    }

    public static getNavWidth(): number {
        return this.navWidth;
    }

    public static collapseNav(): void {
        this.navWidth = 0;
    }

    public static expandNav(): void {
        this.navWidth = this.convertRemToPx(NAV_BREAKPOINT);
    }
}
