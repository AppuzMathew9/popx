import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabelInput from '../components/FloatingLabelInput';
import CustomRadioGroup from '../components/CustomRadioGroup';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: 'Yes' // Default to 'Yes'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    // Constraint: Name must be Marry Doe
    if (formData.fullName.trim() !== 'Marry Doe') {
      setError('Full Name must be Marry Doe.');
      return;
    }

    // Constraint: Email must be Marry@Gmail.com
    if (formData.email.trim().toLowerCase() !== 'marry@gmail.com') {
      setError('Email address must be Marry@Gmail.com.');
      return;
    }

    // Save to LocalStorage
    localStorage.setItem('popx_user', JSON.stringify(formData));

    // Redirect to profile
    navigate('/profile');
  };

  return (
    <div className="screen-content" style={{ paddingBottom: '30px' }}>
      <div style={{ marginTop: '10px', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
          Create your <br />PopX account
        </h1>
      </div>

      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ flex: 1 }}>
          <FloatingLabelInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <FloatingLabelInput
            label="Phone number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <FloatingLabelInput
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FloatingLabelInput
            label="Password"
            name="password"
            type="text"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FloatingLabelInput
            label="Company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          <CustomRadioGroup
            label="Are you an Agency?"
            name="isAgency"
            options={[
              { label: 'Yes', value: 'Yes' },
              { label: 'No', value: 'No' }
            ]}
            value={formData.isAgency}
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
          style={{ marginTop: '85px' }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupScreen;
