import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OneAlbum = (props) => {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const album = props.albums.find((a) => a.id === parseInt(albumId));

  if (!album) {
    return <div style={{ padding: '20px' }}><h2>Album not found</h2></div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{album.albumTitle}</h2>
      <img src={album.imgURL} alt="album cover" />
      <p>{album.albumDescription}</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back to Albums
      </button>
    </div>
  );
};

export default OneAlbum;