import {Component} from '@angular/core';
import {ColorProviderService} from "./colors-provider/color-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  ngOnInit() {
    this.colorProvider.runColorProvider();
  }


  constructor(private colorProvider: ColorProviderService) {

  }
}
