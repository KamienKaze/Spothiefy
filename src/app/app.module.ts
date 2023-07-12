import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackControlsComponent } from './components/legacy/track-controls/track-controls.component';
import { VolumeControlComponent } from './components/legacy/volume-control/volume-control.component';
import { FormsModule } from "@angular/forms";
import {ColorProviderService} from "./colors-provider/color-provider.service";
import { PlayerBarSectionComponent } from './components/player-bar-section/player-bar-section.component';
import { GroupContainerComponent } from './components/reusable/group-container/group-container.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { NavCheckboxComponent } from './components/reusable/nav-buttons/nav-checkbox/nav-checkbox.component';
import {LocalStorageManagerService} from "./services/local-storage-manager/local-storage-manager.service";
import { HomePageComponent } from './components/home-page/home-page.component';
import {CurrentSongComponent} from "./components/player-bar-section/current-song/current-song.component";


@NgModule({
    declarations: [
        AppComponent,
        CurrentSongComponent,
        TrackControlsComponent,
        VolumeControlComponent,
        PlayerBarSectionComponent,
        GroupContainerComponent,
        NavSectionComponent,
        ArticleSectionComponent,
        NavCheckboxComponent,
        HomePageComponent,
        CurrentSongComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [LocalStorageManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
