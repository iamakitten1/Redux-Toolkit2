import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: 'flex', gap: '10px', listStyleType: 'none' }}>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

