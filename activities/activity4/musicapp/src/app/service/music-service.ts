import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/artist.model';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private host = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // ---- ARTISTS ----
  getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(`${this.host}/artists`)
      .subscribe(artists => callback(artists));
  }

  // ---- ALBUMS ----
  getAlbumsByArtist(artistId: number, callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(`${this.host}/albums/artist/${artistId}`)
      .subscribe(albums => callback(albums));
  }

  getAlbumById(albumId: number, callback: (album: Album | null) => void): void {
    this.http.get<Album>(`${this.host}/albums/${albumId}`)
      .subscribe({
        next: album => callback(album),
        error: () => callback(null)
      });
  }

  createAlbum(album: Album, callback: (id: number) => void): void {
    this.http.post<Album>(`${this.host}/albums`, album)
      .subscribe({
        next: created => callback(created.albumId),
        error: () => callback(-1)
      });
  }

  updateAlbum(album: Album, callback: (status: number) => void): void {
    this.http.put(`${this.host}/albums/${album.albumId}`, album)
      .subscribe({
        next: () => callback(0),
        error: () => callback(-1)
      });
  }
}
