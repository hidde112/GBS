import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Klik <Link to="/Home" style={{ textDecoration: 'none' }}>hier</Link> om terug te gaan naar Home</p>
    </div>
  );
}

export default NotFound;