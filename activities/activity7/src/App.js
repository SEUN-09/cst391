import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SearchAlbum from './SearchAlbum';
import NavBar from './NavBar';
import EditAlbum from './EditAlbum';
import OneAlbum from './OneAlbum';
import albumData from './albums.json';
import './App.css';

const AppContent = () => {
  const [albumList, setAlbumList]       = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigate                          = useNavigate();

  useEffect(() => {
    setAlbumList(albumData);
  }, []);

  // Used by Card.js — saves full album, then navigates to URI
  const updateSingleAlbum = (uri, album) => {
    setSelectedAlbum(album);
    navigate(uri);
  };

  // Called after create OR edit — reloads from JSON and goes home
  const onEditAlbum = () => {
    setAlbumList([...albumData]);   // ✅ reload from JSON (no REST API yet)
    navigate('/');
  };

  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Routes>

          {/* Home — search + album cards */}
          <Route
            path="/"
            element={
              <SearchAlbum
                albums={albumList}
                updateSingleAlbum={updateSingleAlbum}
              />
            }
          />

          {/* Add New Album — no album prop so form is blank */}
          <Route
            path="/new"
            element={
              <EditAlbum
                onEditAlbum={onEditAlbum}
              />
            }
          />

          {/* Edit Album — passes selectedAlbum so form is pre-filled */}
          <Route
            path="/edit"
            element={
              <EditAlbum
                onEditAlbum={onEditAlbum}
                album={selectedAlbum}     // ✅ pre-fills the form fields
              />
            }
          />

          {/* View single album — :id matches useParams in OneAlbum */}
          <Route
            path="/show/:id"              // ✅ was :albumId — fixed to match OneAlbum
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