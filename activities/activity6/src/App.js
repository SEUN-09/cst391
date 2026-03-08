import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SearchAlbum from './SearchAlbum';
import NavBar from './NavBar';
import NewAlbum from './NewAlbum';
import OneAlbum from './OneAlbum';
import albumData from './albums.json';
import './App.css';

const AppContent = () => {
  const [albumList, setAlbumList] = useState([]);
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setAlbumList(albumData);
  }, []);

  const updateSingleAlbum = (albumId) => {
    setCurrentlySelectedAlbumId(albumId);
    navigate(`/show/${albumId}`);
  };

  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <h1>Music Albums</h1>
        <Routes>
          <Route
            path="/"
            element={
              <SearchAlbum
                albums={albumList}
                onSelectAlbum={updateSingleAlbum}
              />
            }
          />
          <Route path="/new" element={<NewAlbum />} />
          <Route
            path="/show/:albumId"
            element={<OneAlbum albums={albumList} />}
          />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;