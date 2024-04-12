import React from 'react';
import NavBar from './NavBar';

export default function Home() {
  return (
    <div class="boxContainer bg-image">
      <NavBar darkMode={false} />
        <h1>Home</h1>
        <h2>it looks like your main skin concern is: acne </h2>
        <h2>following an analysis of your skin, we recommend four essential ingredients...</h2>
        <button>REDO ANALYSIS</button>
        </div>
  );
}
    