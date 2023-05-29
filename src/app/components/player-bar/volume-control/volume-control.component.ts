import { Component } from '@angular/core';

@Component({
  selector: 'volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.scss']
})

export class VolumeControlComponent {

  inputValue: number = 100;
  previousValueState: number = this.inputValue;
  currentIcon: number = 3;
  isHovered: boolean = false;

  styleOnHovered = {
    'background': 'black'
  }

  styleOnNotHovered = {
    'background': 'white'
  }

  onInputUpdate() {

    this.previousValueState = this.inputValue;
    this.iconUpdate();
  }
  muteButton() {
    if(this.inputValue != 0)
    {
      this.inputValue = 0;
    }
    else
    {
      if(this.inputValue == 0 && this.previousValueState != 0)
      {
        this.inputValue = this.previousValueState;
      }
      if(this.inputValue == 0 && this.previousValueState == 0)
      {
        this.inputValue = 100;
      }
    }

    this.iconUpdate();
  }
  iconUpdate() {
    if(this.inputValue == 0) {
      this.currentIcon = 0;
    }
    if(this.inputValue > 0 && this.inputValue <= 40) {
      this.currentIcon = 1;
    }
    if(this.inputValue > 40 && this.inputValue <= 80) {
      this.currentIcon = 2;
    }
    if(this.inputValue > 80) {
      this.currentIcon = 3;
    }
  }
}
