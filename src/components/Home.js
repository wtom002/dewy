import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Image } from "react";
;
export default function Home() {
  return (
    <><div className="banner banner-l bg-home">
      <NavBar darkMode={false} />
      <h1>welcome to dewy.</h1>
      <h2>our advanced system utilizes computer vision and personalized surveys to tailor recommendations specifically for your skin concerns</h2>
      <button><a href="/ResultsPage">START ANALYSIS </a></button>
    </div>
    <Onboard/>
  </>
  );
}
