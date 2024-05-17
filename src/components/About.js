import React from 'react';
import NavBar from './NavBar';

export default function About() {
  return (
    <><div className="banner banner-s bg-about">
      <NavBar darkMode={false} />
      <h1>nice to meet you,<br />we are glazed donut</h1>
    </div><div className="container-1">
        <h1>how it started</h1>
        <h2>How might we help individuals who are new to skincare gain immediate skincare knowledge and enable them to swiftly address their skin concerns by suggesting the most suitable ingredients in skincare products?</h2>
      </div>
      <div className="container-2">
        <div className="leftcol">
        <h1>our inspiration</h1>
        <div className="inspo-grid">
          <div className="inspo" style={{ backgroundImage: "url('components/images/overload.png')" }}>
            <p>Social Media Misinformation</p>
          </div>
          <div className="inspo">
            <p>Trend-Driven Purchases</p>
          </div>
          <div className="inspo">
            <p>Harmful Skincare Ingredients</p>
          </div>
          <div className="inspo">
            <p>Information Overload</p>
          </div>
        </div>
        </div>
        <h2>Our goal is to help skincare beginners navigate the complexities of skincare and support them in making informed decisions.</h2>
      </div>
      </>
  );
}