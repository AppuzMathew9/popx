import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingScreen from './pages/LandingScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import ProfileScreen from './pages/ProfileScreen';

import { useNavigate } from 'react-router-dom';

function AppContent() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="app-container">
      {/* Visual iPhone top elements */}
      <div className="iphone-top-bar"></div>
      
      <div className="screen-wrapper">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>

      {/* Clickable circular physical home button */}
      <button 
        className="iphone-home-button" 
        onClick={handleHomeClick}
        aria-label="iPhone Home Button"
      ></button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
