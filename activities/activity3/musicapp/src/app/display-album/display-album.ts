import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../models/album.model';
import { MusicService } from '../service/music-service';

@Component({
  selector: 'app-display-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-album.html'
})
export class DisplayAlbum implements OnInit {

  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService
  ) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.album = this.musicService.getAlbumById(albumId);
  }
}


