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

  public static getBoolFromLocalStorage(name: string): boolean {
    if(localStorage.getItem(name) === 'true') {
      return true;
    }
    return localStorage.getItem(name) !== 'false';
  }

  public static setBoolToLocalStorage(name: string, bool: string): void {
    localStorage.setItem(name, `${bool}`);
  }
}
