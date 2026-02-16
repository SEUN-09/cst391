import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MusicService } from '../service/music-service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-album.html'
})
export class CreateAlbum {

  album: Album = {
    albumId: 0,
    artistId: 0,
    title: '',
    year: new Date().getFullYear(),
    image: '',
    description: '',
    tracks: []
  };

  message = '';

  constructor(
    private musicService: MusicService,
    private router: Router
  ) {}

  createAlbum(): void {
    const result = this.musicService.createAlbum(this.album);

    if (result !== -1) {
      this.message = 'Album created successfully!';

      // navigate back and force refresh
      this.router.navigate(
        ['list-artists'],
        { queryParams: { refresh: new Date().getTime() } }
      );

      // reset form
      this.album = {
        albumId: 0,
        artistId: 0,
        title: '',
        year: new Date().getFullYear(),
        image: '',
        description: '',
        tracks: []
      };
    } else {
      this.message = 'Error creating album.';
    }
  }

}

