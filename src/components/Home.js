import React from 'react';
import NavBar from './NavBar';

export default function Home() {
  return (
    <><div class="banner banner-l bg-home">
      <NavBar darkMode={false} />
      <h1>welcome to dewy.</h1>
      <h2>our advanced system utilizes computer vision and personalized surveys to tailor recommendations specifically for your skin concerns</h2>
      <button>START ANALYSIS</button>
    </div>
    <div class="main">
    <div class="cards-container">
      <h1>how does it work</h1>
      <div class="box">
        <img src="../img/Scan.png" alt=""></img>
          <h2>1867</h2>
      </div>
      
      <div class="box">
        <img src="../img/Scan.png" alt=""></img>
          <h2>2</h2>
      </div>
      <div class="box">
        <img src="../img/Scan.png" alt=""></img>
          <h2>3</h2>
        
      </div>
      <div class="box">
        <img src="../img/Scan.png" alt=""></img>
          <h2>4</h2>
      </div></div>
      </div></>
  );
}