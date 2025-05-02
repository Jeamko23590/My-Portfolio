import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Jearemy Niko Nositera. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;