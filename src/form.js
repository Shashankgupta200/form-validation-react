// src/Form.js
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';  // Import the CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = useCallback(() => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email must be a valid email address';
    }

    if (!formData.password) newErrors.password = 'Password is required';

    if (!formData.phoneNo) {
      newErrors.phoneNo = 'Phone No. is required';
    } else if (!/^\d{1,4}-\d{6,10}$/.test(formData.phoneNo)) {
      newErrors.phoneNo = 'Phone No. must be in the format country code - number';
    }

    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';

    if (!formData.panNo) {
      newErrors.panNo = 'Pan No. is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNo)) {
      newErrors.panNo = 'Pan No. must be in the format AAAAA9999A';
    }

    if (!formData.aadharNo) {
      newErrors.aadharNo = 'Aadhar No. is required';
    } else if (!/^\d{16}$/.test(formData.aadharNo)) {
      newErrors.aadharNo = 'Aadhar No. must be 16 digits';
    }

    return newErrors;
  }, [formData]);

  useEffect(() => {
    setErrors(validate());
  }, [formData, validate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      navigate('/details', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Phone No.:</label>
        <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        {errors.phoneNo && <p>{errors.phoneNo}</p>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p>{errors.country}</p>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Delhi">Delhi</option>
        </select>
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>Pan No.:</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {errors.panNo && <p>{errors.panNo}</p>}
      </div>
      <div>
        <label>Aadhar No.:</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {errors.aadharNo && <p>{errors.aadharNo}</p>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
};

export default Form;
