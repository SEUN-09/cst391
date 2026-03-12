import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OneAlbum = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 👇 Add this temporarily to debug
  console.log('id from URL:', id);
  console.log('albums received:', props.albums);

  const album = props.albums.find((a) => a.id === parseInt(id));

  if (!album) {
    return <div style={{ padding: '20px' }}><h2>Album not found</h2></div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <img src={album.imgURL} alt="album cover" style={{ width: '300px', borderRadius: '8px' }} />
      <h2>{album.albumTitle}</h2>
      <p>{album.albumDescription}</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back to Albums
      </button>
    </div>
  );
};

export default OneAlbum;