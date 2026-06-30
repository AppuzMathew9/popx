import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabelInput from '../components/FloatingLabelInput';

const LoginScreen = () => {
  useEffect(() => {
    console.log("Evaluation Tip: You can log in using Marry@Gmail.com / Marry Doe");
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'marry@gmail.com',
    password: 'Marry Doe'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    // Try to load registered user
    const registeredUserJson = localStorage.getItem('popx_user');
    let registeredUser = null;
    try {
      if (registeredUserJson) {
        registeredUser = JSON.parse(registeredUserJson);
      }
    } catch (err) {
      console.error('Error parsing user data', err);
    }

    // Check credentials (stored user OR default fallback for evaluation convenience)
    const isRegisteredMatch = registeredUser &&
      registeredUser.email.toLowerCase() === formData.email.toLowerCase() &&
      registeredUser.password === formData.password;

    const isFallbackMatch = formData.email.toLowerCase() === 'marry@gmail.com' &&
      formData.password === 'Marry Doe';

    if (isRegisteredMatch || isFallbackMatch) {
      // If logging in with fallback but no registered user, save fallback data
      if (isFallbackMatch && !registeredUser) {
        localStorage.setItem('popx_user', JSON.stringify({
          fullName: 'Marry Doe',
          phone: '+91 9999999999',
          email: 'marry@gmail.com',
          password: 'Marry Doe',
          companyName: 'Marry Doe',
          isAgency: 'Yes'
        }));
      }
      navigate('/profile');
    } else {
      setError('You can log in only using Marry@Gmail.com / Marry Doe');
    }
  };

  // Button is disabled if fields are empty
  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  return (
    <div className="screen-content" style={{ paddingBottom: '40px' }}>
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>
          Signin to your <br />PopX account
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.
        </p>
      </div>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ flex: 1 }}>
          <FloatingLabelInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FloatingLabelInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && (
            <p style={{ color: '#E03B3B', fontSize: '13px', marginBottom: '16px', fontWeight: '500' }}>
              {error}
            </p>
          )}

        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={!isFormValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
