import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutThisSite from './AboutThisSite';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (navigate, from) => {
    setIsLoggedIn(true);
    navigate(from || '/');
  };

  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ padding: '20px' }}>
                <h2>Welcome to the Router Demo!</h2>
                <p>Use the navbar to navigate. About and Contact require login.</p>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AboutThisSite />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ContactUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={<LoginPage onClick={handleLogin} />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;