import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentSongComponent } from './components/legacy/current-song/current-song.component';
import { TrackControlsComponent } from './components/legacy/track-controls/track-controls.component';
import { VolumeControlComponent } from './components/legacy/volume-control/volume-control.component';
import { FormsModule } from "@angular/forms";
import {ColorProviderService} from "./colors-provider/color-provider.service";
import { PlayerBarComponent } from './components/player-bar/player-bar.component';
import { LibraryComponent } from './components/library/library.component';
import { HomeComponent } from './components/home/home.component';
import { NavCheckboxComponent } from './components/nav-checkbox/nav-checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentSongComponent,
    TrackControlsComponent,
    VolumeControlComponent,
    PlayerBarComponent,
    LibraryComponent,
    HomeComponent,
    NavCheckboxComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
