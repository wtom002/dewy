import React from 'react'

export default function NavBar({ darkMode }) {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <ul className="nav-links">
        <div>
        <li className="logo"><a href="/">dewy</a></li>
        </div>
        <div className="navnav">
        <li><a href="/scan">SCAN</a></li>
        <li><a href="/ingredinary">INGREDINARY</a></li>
        <li><a href="/about">ABOUT US</a></li>
        </div>
      </ul>
    </nav>
  );
}