import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, LogOut } from 'lucide-react';
import defaultAvatar from '../assets/user-avatar.png';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Retrieve data from localStorage
    const savedUser = localStorage.getItem('popx_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing user data', e);
      }
    } else {
      // If no user is logged in, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (!user) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          localStorage.removeItem('popx_user'); // Clear data to reset signup flow
          window.location.href = '/'; // Reload/Redirect to landing page
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [user]);

  if (!user) {
    return (
      <div className="screen-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="screen-content" style={{ padding: 0 }}>
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid #f0f0f0',
        background: '#ffffff',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '18px', margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>
          Account Settings
        </h1>
      </div>

      {/* Profile Details */}
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
          {/* Avatar Container */}
          <div style={{ position: 'relative', width: '76px', height: '76px' }}>
            <img
              src={defaultAvatar}
              alt="Profile Avatar"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            {/* Camera Overlay Badge */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #ffffff',
              cursor: 'pointer'
            }}>
              <Camera size={12} />
            </div>
          </div>

          {/* User Metadata */}
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: '0 0 4px' }}>
              {user.fullName}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              {user.email}
            </p>
          </div>
        </div>

        {/* Description Copy */}
        <p style={{
          fontSize: '14px',
          color: 'var(--text-primary)',
          lineHeight: '1.6',
          marginBottom: '32px',
          paddingBottom: '24px',
          borderBottom: '1px dashed var(--border-color)'
        }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
        </p>

      </div>
    </div>
  );
};

export default ProfileScreen;
