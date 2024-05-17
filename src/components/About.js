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
        <div className="leftcol"></div>
      </div>

      </>
  );
}