// src/pages/Admin.js
import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  const [donations, setDonations] = useState([
    { item: 'Rice', quantity: 20, approved: false },
    { item: 'Vegetables', quantity: 10, approved: false },
  ]);

  const toggleApproval = (index) => {
    setDonations((prevDonations) =>
      prevDonations.map((donation, i) =>
        i === index ? { ...donation, approved: !donation.approved } : donation
      )
    );
  };

  return (
    <div className="admin-container">
      <h2>Admin Page</h2>
      <h3>Manage Donations</h3>
      <ul>
        {donations.map((donation, index) => (
          <li key={index}>
            {donation.item} - {donation.quantity}kg 
            <button
              className={`approval-button ${donation.approved ? 'approved' : 'pending'}`}
              onClick={() => toggleApproval(index)}
            >
              {donation.approved ? 'Revoke Approval' : 'Approve'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
