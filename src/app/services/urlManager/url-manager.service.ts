import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import * as http from "http";

const URL: string = "./../../../assets/tracks.json"

@Injectable({
  providedIn: 'root'
})
export class UrlManagerService {

  artists$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  tracks$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) {
    httpClient.get("http://localhost:3000/artists").subscribe(res => {
      this.artists$.next(res);
    });
    httpClient.get("http://localhost:3000/tracks").subscribe(res => {
      this.tracks$.next(res);
    });
  }
}
