import { Component } from '@angular/core';
import {UrlManagerService} from "../../services/urlManager/url-manager.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    public greeting: string = "";
    public tracks: any = [];

    private setGreeting(): void {
        let date: Date = new Date();
        let currentHour: number = date.getHours();

        if(currentHour >= 19 && currentHour < 6) {
            this.greeting = "Good evening";
            console.log("Good evening");
        }
        if(currentHour >= 6 && currentHour < 12) {
            this.greeting = "Good morning";
            console.log("Good morning");
        }
        if(currentHour >= 12 && currentHour < 19) {
            this.greeting = "Good afternoon";
            console.log("Good afternoon");
        }
    }

    constructor(private urlManager: UrlManagerService) {
        urlManager.tracks$.subscribe(res => {
            this.tracks = res;
        });
    }

    ngOnInit() {
        this.setGreeting();
    }
}
