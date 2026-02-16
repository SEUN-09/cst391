import { Injectable } from '@angular/core';
import { SAMPLE_MUSIC_DATA } from '../../data/sample-music-data';
import { Artist } from '../models/artist.model';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private artists: Artist[] = SAMPLE_MUSIC_DATA.artists;
  private albums: Album[] = SAMPLE_MUSIC_DATA.albums;

  // ---- ARTISTS ----
  getArtists(): Artist[] {
    return this.artists;
  }

  // ---- ALBUMS ----
  getAlbumsByArtist(artistId: number): Album[] {
    return this.albums.filter(album => album.artistId === artistId);
  }
  createAlbum(album: Album): number {
    try {
      this.albums.push(album);
      return album.albumId;
    } catch {
      return -1;
    }
  }

  getAlbumById(albumId: number): Album | null {
    return this.albums.find(a => a.albumId === albumId) ?? null;
  }



  updateAlbum(album: Album): number {
    const index = this.albums.findIndex(
      a => a.albumId === album.albumId && a.artistId === album.artistId
    );

    if (index !== -1) {
      this.albums.splice(index, 1, album);
      return 0;
    }

    return -1;
  }

}




