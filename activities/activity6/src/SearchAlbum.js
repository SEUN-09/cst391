import React, { useState } from 'react';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

const SearchAlbum = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const updateSearchResults = (phrase) => {
    setSearchPhrase(phrase);
  };

  return (
    <div>
      <SearchForm onSubmit={updateSearchResults} />
      <AlbumList
        albums={props.albums}
        searchPhrase={searchPhrase}
        onSelectAlbum={props.onSelectAlbum}
      />
    </div>
  );
};

export default SearchAlbum;