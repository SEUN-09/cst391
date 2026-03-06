import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selectedArtist: Artist | null = null;
  albums: Album[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.getArtists((artists: Artist[]) => {
      this.artists = artists;
    });
  }

  onSelectArtist(artist: Artist): void {
    this.selectedArtist = artist;

    this.musicService.getAlbumsByArtist(
      artist.artistId,
      (albums: Album[]) => {
        this.albums = albums;
      }
    );
  }
}
