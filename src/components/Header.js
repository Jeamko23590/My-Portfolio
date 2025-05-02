import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <h1 className="mb-0">Nositera</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;