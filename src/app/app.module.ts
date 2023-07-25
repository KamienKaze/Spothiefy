import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { PlayerBarSectionComponent } from './components/player-bar-section/player-bar-section.component';
import { GroupContainerComponent } from './components/reusable/group-container/group-container.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { NavCheckboxComponent } from './components/reusable/nav-buttons/nav-checkbox/nav-checkbox.component';
import {LocalStorageManagerService} from "./services/local-storage-manager/local-storage-manager.service";
import { HomePageComponent } from './components/home-page/home-page.component';
import {CurrentSongComponent} from "./components/player-bar-section/current-song/current-song.component";
import {TrackControlsComponent} from "./components/player-bar-section/track-controls/track-controls.component";
import {VolumeControlComponent} from "./components/player-bar-section/volume-control/volume-control.component";
import { MainTrackTileComponent } from './components/reusable/main-track-tile/main-track-tile.component';
import {HttpClientModule} from "@angular/common/http";
import { ArtistNavTileComponent } from './components/reusable/artist-nav-tile/artist-nav-tile.component';
import { ArtistPageComponent } from './components/reusable/artist-page/artist-page.component';
import {FooterComponent} from "./components/footer/footer.component";


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
        TrackControlsComponent,
        TrackControlsComponent,
        VolumeControlComponent,
        MainTrackTileComponent,
        ArtistNavTileComponent,
        ArtistPageComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [LocalStorageManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
