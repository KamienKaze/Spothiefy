import { Component } from '@angular/core';
import {UrlManagerService} from "../../services/urlManager/url-manager.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    artists: any = [];

    constructor(urlManager: UrlManagerService) {
        urlManager.artists$.subscribe(res => {
           this.artists = res;
           console.log(this.artists);
        });
    }
}
