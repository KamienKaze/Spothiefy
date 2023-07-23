import { Component } from '@angular/core';
import {UrlManagerService} from "../../services/urlManager/url-manager.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    tracks: any = [];

    constructor(urlManager: UrlManagerService) {
        urlManager.tracks$.subscribe(res => {
           this.tracks = res;
           console.log(this.tracks);
        });
    }
}
