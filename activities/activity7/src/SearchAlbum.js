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
        updateSingleAlbum={props.updateSingleAlbum}         // ✅ pass it down
      />
    </div>
  );
};

export default SearchAlbum;