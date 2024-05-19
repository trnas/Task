import React from 'react'
import { landLogo } from '../assets';

function Header() {
  return (
    <header className="header1">
      <div className="head1">
        <img src={landLogo} className="logo" />
        <div className="hidemob">
          <h3>Join as Design Experts</h3>
          <h3>Partner with LAND Interiors</h3>
        </div>

        <img className="burger" src="/src/assets/burger.svg" alt="" />
      </div>
      <nav className="head">
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Studio</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
      </nav>
    </header>
  );
}

export default Header