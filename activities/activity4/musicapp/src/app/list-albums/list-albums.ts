import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-albums.html',
})
export class ListAlbums {
  @Input() artistId!: number;
  @Input() albums: Album[] = [];

  constructor(private router: Router) {}

  onEdit(albumId: number): void {
    this.router.navigate(['/edit/artist', albumId]);
  }

  onDelete(albumId: number): void {
    this.router.navigate(['/delete/artist', albumId]);
  }
}
