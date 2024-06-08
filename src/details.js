
import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div>
      <h1>Submitted Details</h1>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone No.:</strong> {formData.phoneNo}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Pan No.:</strong> {formData.panNo}</p>
      <p><strong>Aadhar No.:</strong> {formData.aadharNo}</p>
    </div>
  );
};

export default Details;
