// src/pages/Recipient.js
import React, { useState } from 'react';
import './Recipient.css';

function Recipient() {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState('');

  const handleChange = (e) => setNewRequest(e.target.value);

  const handleRequest = () => {
    setRequests([...requests, newRequest]);
    setNewRequest('');
  };

  return (
    <div className="recipient-container">
      <h2>Recipient Page</h2>
      <h3>Available Donations</h3>
      <ul>
        <li>Rice - 20kg</li>
        <li>Vegetables - 10kg</li>
        <li>Bread - 5 packs</li>
      </ul>
      <h3>Request Item</h3>
      <input
        type="text"
        value={newRequest}
        onChange={handleChange}
        placeholder="Enter item name"
      />
      <button className="request-button" onClick={handleRequest}>Request Item</button>
      <h3>Your Requests</h3>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>{request}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipient;
