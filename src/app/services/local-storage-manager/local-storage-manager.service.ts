import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagerService {

  public static getFromLocalStorage(name: string, def: number): number {
    return Number.parseInt(localStorage.getItem(name) ?? `${def}`);
  }

  public static setLocalStorage(name: string, value: number): void {
    localStorage.setItem(name, `${value}`);
  }
}
