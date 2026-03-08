import React from 'react';
import Card from './Card';

const AlbumList = (props) => {
  const renderedList = () => {
    return props.albums
      .filter((album) => {
        if (props.searchPhrase === '') return true;
        return album.albumDescription
          .toLowerCase()
          .includes(props.searchPhrase.toLowerCase());
      })
      .map((album) => (
        <Card
          key={album.id}
          albumTitle={album.albumTitle}
          albumDescription={album.albumDescription}
          buttonText={album.buttonText}
          imgURL={album.imgURL}
          onSelectAlbum={() => props.onSelectAlbum(album.id)}
        />
      ));
  };

  return (
    <div className="card-container">
      {renderedList()}
    </div>
  );
};

export default AlbumList;