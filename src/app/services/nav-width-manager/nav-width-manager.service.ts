import {Injectable} from '@angular/core';
import {LocalStorageManagerService} from "../local-storage-manager/local-storage-manager.service";
import {BehaviorSubject} from "rxjs";

const NAV_BREAKPOINT: number = 17.6; //rem

@Injectable({
    providedIn: 'root'
})

export class NavWidthManagerService {

    private static fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

    private static convertRemToPx(rem: number) {
        return rem * this.fontSize;
    }
}
