import {Injectable} from '@angular/core';
import {LocalStorageManagerService} from "../local-storage-manager/local-storage-manager.service";
import {BehaviorSubject} from "rxjs";

const NAV_BREAKPOINT: number = 17.6; //rem

@Injectable({
    providedIn: 'root'
})

export class NavWidthManagerService {


    public static navWidthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(NavWidthManagerService.getNavWidthFromLocalStorage());
    public static isNavExpandedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(LocalStorageManagerService.getBoolFromLocalStorage('isNavExpanded'));

    private static fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

    private static convertRemToPx(rem: number) {
        return rem * this.fontSize;
    }

    private static getNavWidthFromLocalStorage(): number {
        return LocalStorageManagerService.getNumberFromLocalStorage('navWidth', NavWidthManagerService.convertRemToPx(NAV_BREAKPOINT));
    }

    public static updateNavWidth(newWidth: number): void {
        if (this.shouldNavBeCollapsed(newWidth)) {
            this.collapseNav();
            return
        }
        if (this.shouldNavBeExpanded(newWidth) && newWidth < this.convertRemToPx(NAV_BREAKPOINT)) {
            this.expandNavManually();
            return
        }

        this.navWidthSubject.next(newWidth);
        LocalStorageManagerService.setNumberToLocalStorage('navWidth', newWidth);
    }

    private static shouldNavBeCollapsed(newWidth: number): boolean {
        return newWidth < (this.convertRemToPx(NAV_BREAKPOINT) / 1.5);
    }

    private static shouldNavBeExpanded(newWidth: number): boolean {
        return newWidth > (this.convertRemToPx(NAV_BREAKPOINT) / 1.5);
    }

    public static collapseNav(): void {
        LocalStorageManagerService.setBoolToLocalStorage('isNavExpanded', 'false');
        this.isNavExpandedSubject.next(false);
        this.navWidthSubject.next(0);
    }

    public static expandNavButton(): void {
        LocalStorageManagerService.setBoolToLocalStorage('isNavExpanded', 'true');
        this.isNavExpandedSubject.next(true);
        this.navWidthSubject.next(this.getNavWidthFromLocalStorage());
    }

    public static expandNavManually(): void {
        LocalStorageManagerService.setBoolToLocalStorage('isNavExpanded', 'true');
        this.isNavExpandedSubject.next(true);
        this.navWidthSubject.next(this.convertRemToPx(NAV_BREAKPOINT));
    }
}
