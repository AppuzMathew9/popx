import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-content" style={{ justifyContent: 'flex-end', paddingBottom: '40px' }}>
      <div style={{ marginTop: 'auto', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '10px' }}>
          Welcome to PopX
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        <button 
          onClick={() => navigate('/signup')} 
          className="btn-primary"
        >
          Create Account
        </button>
        <button 
          onClick={() => navigate('/login')} 
          className="btn-secondary"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
