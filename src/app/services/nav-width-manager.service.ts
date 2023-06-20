import {Injectable} from '@angular/core';

const NAV_BREAKPOINT: number = 17.6; //rem

@Injectable({
    providedIn: 'root'
})

export class NavWidthManagerService {

    private static navWidth: number = this.getFromLocalStorage('navWidth', this.convertRemToPx(NAV_BREAKPOINT));
    private static fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

    private static convertRemToPx(rem: number) {
        return rem * this.fontSize;
    }

    private static getFromLocalStorage(name: string, def: number): number {
        return Number.parseInt(localStorage.getItem(name) ?? `${def}`);
    }

    public static collapseNav(): void {
        this.navWidth = 0;
    }

    public static expandNav(): void {
        this.navWidth = this.convertRemToPx(NAV_BREAKPOINT);
    }

}
