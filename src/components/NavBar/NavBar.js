import React from 'react'
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="logo">dewy</li>
        <li><a href="/">SCAN</a></li>
        <li><a href="/about">INGREDINARY</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}