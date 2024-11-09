// src/pages/Donor.js
import React, { useState } from 'react';
import './Donor.css';

function Donor() {
  const [donations, setDonations] = useState([]);
  const [newDonation, setNewDonation] = useState({ item: '', quantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDonation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDonations([...donations, newDonation]);
    setNewDonation({ item: '', quantity: '' });
  };

  return (
    <div className="donor-container">
      <h2>Donor Page</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <div>
          <label>Item:</label>
          <input
            type="text"
            name="item"
            value={newDonation.item}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={newDonation.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Donation</button>
      </form>
      <h3>Your Donations</h3>
      <ul className="donation-list">
        {donations.map((donation, index) => (
          <li key={index}>{donation.item} - {donation.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Donor;
