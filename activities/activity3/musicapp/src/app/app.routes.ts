import { Routes } from '@angular/router';

import { ListArtists } from './list-artists/list-artists';
import { CreateAlbum } from './create-album/create-album';
import { DisplayAlbum } from './display-album/display-album';
import { EditAlbum } from './edit-album/edit-album';
import { DeleteAlbum } from './delete-album/delete-album';
import { AboutComponent } from './about/about';
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'list-artists', pathMatch: 'full' },

  { path: 'list-artists', component: ListArtists },
  { path: 'create', component: CreateAlbum },
  { path: 'display/:id', component: DisplayAlbum },
  { path: 'edit/artist/:id', component: EditAlbum },
  { path: 'delete/artist/:id', component: DeleteAlbum },
  { path: 'about', component: AboutComponent }


];


