import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerBarComponent } from './components/player-bar/player-bar.component';
import { CurrentSongComponent } from './components/player-bar/current-song/current-song.component';
import { TrackControlsComponent } from './components/player-bar/track-controls/track-controls.component';
import { VolumeControlComponent } from './components/player-bar/volume-control/volume-control.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PlayerBarComponent,
    CurrentSongComponent,
    TrackControlsComponent,
    VolumeControlComponent,
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
