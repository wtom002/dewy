import React from 'react'
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="logo">dewy</li>
        <li><a href="/">SCAN</a></li>
        <li><a href="/ingredinary">INGREDINARY</a></li>
        <li><a href="/about">ABOUT US</a></li>
      </ul>
    </nav>
  );
}