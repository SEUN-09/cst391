import React from 'react';
import Card from './Card';

const AlbumList = (props) => {
  const renderedList = () => {
    return props.albums
      .filter((album) => {
        if (!props.searchPhrase || props.searchPhrase === '') return true;
        return album.albumDescription
          .toLowerCase()
          .includes(props.searchPhrase.toLowerCase());
      })
      .map((album) => (
        <Card
          key={album.id}
          album={album}
          albumTitle={album.albumTitle}
          albumDescription={album.albumDescription}
          buttonText={album.buttonText}
          imgURL={album.imgURL}
          updateSingleAlbum={props.updateSingleAlbum}
        />
      ));
  };

  return (
    <div className="d-flex flex-wrap gap-3">
      {renderedList()}
    </div>
  );
};

export default AlbumList;