import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagerService {

  public static getNumberFromLocalStorage(name: string, def: number): number {
    return Number.parseInt(localStorage.getItem(name) ?? `${def}`);
  }
  public static setNumberToLocalStorage(name: string, value: number): void {
    localStorage.setItem(name, `${value}`);
  }

  public static getBoolFromLocalStorage(name: string, def: boolean): boolean {
    switch (localStorage.getItem(name)) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return def;
    }
  }
  public static setBoolToLocalStorage(name: string, value: string): void {
    localStorage.setItem(name, `${value}`);
  }
}
