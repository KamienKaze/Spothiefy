import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class UrlManagerService {

  artists$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  tracks$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) {
    httpClient.get("https://kamienkaze.github.io/artists.json").subscribe(res => {
      this.artists$.next(res);
    });
    httpClient.get("https://kamienkaze.github.io/tracks.json").subscribe(res => {
      this.tracks$.next(res);
    });
  }
}
