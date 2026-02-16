import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../models/album.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-albums.html'
})

export class ListAlbums {
  @Input() artistId!: number;
  @Input() albums: Album[] = [];
}

