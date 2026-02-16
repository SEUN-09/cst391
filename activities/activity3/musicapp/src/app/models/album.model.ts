import { Track } from './track.model';

export interface Album {
  albumId: number;
  artistId: number;
  title: string;
  year: number;
  image: string;
  description: string;
  tracks: Track[];
}
