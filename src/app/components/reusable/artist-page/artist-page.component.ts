import { Component } from '@angular/core';
import {UrlManagerService} from "../../../services/urlManager/url-manager.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent {

  private id: string | null = null;
  public artistName: string = "NF";
  public imgSrc: string = "nf.jpg";
  public tracks: any = [];

  private allTracks: any = [];
  private allArtists: any = [];

  constructor(private route: ActivatedRoute, private urlManager: UrlManagerService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.id = params['name'];

      this.reloadComponent();
    })

    this.urlManager.tracks$.subscribe(res => {
      this.allTracks = res;
      this.reloadComponent();
    });

    this.urlManager.artists$.subscribe(res => {
      this.allArtists = res;
      this.reloadComponent();
    });
  }

  private reloadComponent(): void {
    this.tracks = [];

    for(let i: number = 0; i < this.allArtists.length; i++) {
      if(this.allArtists[i].id == this.id) {
        this.artistName = this.allArtists[i].name;
        this.imgSrc = this.allArtists[i].pictureFilename;
      }
    }

    if(this.allTracks != null) {
      for(let i: number = 0; i < this.allTracks.length; i++) {
        if(this.allTracks[i].artist == this.artistName) {
          this.tracks.push(this.allTracks[i]);
        }
      }
    }

    console.log(this.tracks);
  }

}