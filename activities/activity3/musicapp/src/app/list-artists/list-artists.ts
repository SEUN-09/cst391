import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../models/artist.model';
import { Album } from '../models/album.model';
import { MusicService } from '../service/music-service';
import { ListAlbums } from '../list-albums/list-albums';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, ListAlbums],
  templateUrl: './list-artists.html',
  styleUrls: ['./list-artists.css']
})
export class ListArtists implements OnInit {

  artists: Artist[] = [];
  selectedArtist?: Artist;
  albums: Album[] = [];

  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.artists = this.musicService.getArtists();

      // reload albums if an artist is already selected
      if (this.selectedArtist) {
        this.albums = this.musicService.getAlbumsByArtist(
          this.selectedArtist.artistId
        );
      }
    });
  }

  onSelectArtist(artist: Artist): void {
    this.selectedArtist = artist;
    this.albums = this.musicService.getAlbumsByArtist(artist.artistId);
  }
}



