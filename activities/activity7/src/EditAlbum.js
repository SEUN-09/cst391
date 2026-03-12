import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditAlbum({ onEditAlbum, album }) {
  const isEditing = album != null;

  // ✅ Field names now match albums.json exactly
  const [albumTitle, setAlbumTitle]           = useState(isEditing ? album.albumTitle : '');
  const [artist, setArtist]                   = useState(isEditing ? album.artist : '');
  const [albumDescription, setAlbumDescription] = useState(isEditing ? album.albumDescription : '');
  const [year, setYear]                       = useState(isEditing ? album.year : '');
  const [imgURL, setImgURL]                   = useState(isEditing ? album.imgURL : '');

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const albumData = {
      ...(isEditing && { id: album.id }),   // ✅ use "id" not "albumId"
      albumTitle,
      artist,
      albumDescription,
      year,
      imgURL,
    };
    saveAlbum(albumData);
  };

  const saveAlbum = (albumData) => {
    // No REST API yet — just call onEditAlbum and go home
    console.log('Saving album:', albumData);
    onEditAlbum();
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>{isEditing ? 'Edit Album' : 'Add New Album'}</h2>
      <form onSubmit={handleFormSubmit}>

        <div className="form-group mb-3">
          <label>Title</label>
          <input
            type="text" className="form-control"
            value={albumTitle}
            onChange={(e) => setAlbumTitle(e.target.value)}
            placeholder="Album title" required
          />
        </div>

        <div className="form-group mb-3">
          <label>Artist</label>
          <input
            type="text" className="form-control"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Artist name"
          />
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            className="form-control" rows="3"
            value={albumDescription}
            onChange={(e) => setAlbumDescription(e.target.value)}
            placeholder="Album description"
          />
        </div>

        <div className="form-group mb-3">
          <label>Year</label>
          <input
            type="number" className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Release year"
          />
        </div>

        <div className="form-group mb-3">
          <label>Image URL</label>
          <input
            type="text" className="form-control"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            placeholder="https://..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Album' : 'Save Album'}
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>

      </form>
    </div>
  );
}

export default EditAlbum;