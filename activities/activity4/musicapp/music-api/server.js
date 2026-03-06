const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ---- SAMPLE DATA (acts like your Topic 1 API) ----
let artists = [
  { artistId: 1, artist: 'Drake' },
  { artistId: 2, artist: 'Burna Boy' }
];

let albums = [
  {
    albumId: 1,
    artistId: 1,
    title: 'Certified Lover Boy',
    year: 2021,
    image: '',
    description: '',
    tracks: []
  },
  {
    albumId: 2,
    artistId: 2,
    title: 'Love, Damini',
    year: 2022,
    image: '',
    description: '',
    tracks: []
  }
];

// ---- ROUTES ----
app.get('/artists', (req, res) => {
  res.json(artists);
});

app.get('/albums/artist/:artistId', (req, res) => {
  const artistId = Number(req.params.artistId);
  res.json(albums.filter(a => a.artistId === artistId));
});

app.get('/albums/:albumId', (req, res) => {
  const albumId = Number(req.params.albumId);
  const album = albums.find(a => a.albumId === albumId);
  res.json(album ?? null);
});

app.post('/albums', (req, res) => {
  const album = req.body;
  album.albumId = albums.length + 1;
  albums.push(album);
  res.json(album);
});

app.put('/albums/:albumId', (req, res) => {
  const albumId = Number(req.params.albumId);
  const index = albums.findIndex(a => a.albumId === albumId);

  if (index !== -1) {
    albums[index] = req.body;
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// ---- START SERVER ----
app.listen(PORT, () => {
  console.log(`Music API running on http://localhost:${PORT}`);
});
