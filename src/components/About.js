import React from 'react';
import NavBar from './NavBar';

export default function About() {

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    const updateSliderPosition = () => {
      const slidesContainer = document.querySelector(".slides");
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
  
    document.querySelector(".next").addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Optionally loop back to the first slide
      }
      updateSliderPosition();
      console.log(currentIndex);
    });
  
    document.querySelector(".prev").addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1; // Optionally loop back to the last slide
      }
      updateSliderPosition();
    });
  });
  
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
          <div className="inspo-mis">
          <p>Social Media Misinformation</p>
        </div>
          <div className="inspo-trend">
            <p>Trend-Driven Purchases</p>
          </div>
          <div className="inspo-harm">
            <p>Harmful Skincare Ingredients</p>
          </div>
          <div className="inspo-overload">
            <p>Information Overload</p>
          </div>
        </div>
        </div>
        <h2>Our goal is to help skincare beginners navigate the complexities of skincare and support them in making informed decisions.</h2>
      </div>
      <div className="container-3">
      <h1>our core values</h1>
      <div className='coreval'>
        <div className='vals'>
          <h1>integrity</h1>
          <p>We emphasize integrity to ensure that every piece of information and recommendation provided is based on accurate, scientifically-based data to foster trust and reliability in our analysis and advice.</p>
        </div>
        <div className='vals'>
          <h1>inclusivity</h1>
          <p>Our analysis is designed to cater to a diverse range of skin types and concerns, ensuring that everyone, regardless of skin condition or background, can access personalized and effective skincare solutions.</p>
        </div>
        <div className='vals'>
          <h1>simplicity</h1>
          <p>We champion simplicity to make skincare ingredients and terminology accessible and understandable, enabling users to make informed decisions without feeling overwhelmed with excessive details.</p>
        </div>
      </div>
      </div>
      
      <div className='container-4'>
    <h1>meet our team</h1>
    <div className= 'teamgrid'>
      <div className='team-steph'></div>
      <div className='team-tiff'></div>
      <div className='team-oscar'></div>
      <div className='team-will'></div>
      <div className='team-eric'></div>
    </div>
      <p className='gratitude'>we also want to thank our Professor Sasha Anderson and TA Keri Mallari for their continuous support throughout the project!</p>
    </div>

    <div className="container-5">
  <h1>behind the scenes</h1>
  <div className="slides">
    <div className="slide">
      <div className="vol">
        <h1>vol 1. research</h1>
        <h2>delving into the problem space</h2>
        <h3>As skincare enthusiasts, we delved into the problem space that people may have when approaching skincare. During the two-week research extensive period, through literature review and market research, we’ve identified several key issues:</h3>
        <p className="first">INFORMATION OVERLOAD.</p>
        <p>TREND-DRIVEN PURCHASES.</p>
        <p>BRANDED PRODUCT RECOMMENDATIONS</p>
      </div>
      <div className="vol-img-1"></div>
    </div>

    <div className="slide">
      <div className="vol">
        <h1>vol 2. research</h1>
        <h2>delving into the problem space</h2>
        <h3>As skincare enthusiasts, we delved into the problem space that people may have when approaching skincare. During the two-week research extensive period, through literature review and market research, we’ve identified several key issues:</h3>
        <p className="first">INFORMATION OVERLOAD.</p>
        <p>TREND-DRIVEN PURCHASES.</p>
        <p>BRANDED PRODUCT RECOMMENDATIONS</p>
      </div>
      <div className="vol-img-1"></div>
    </div>

    <div className="slide">
      <div className="vol">
        <h1>vol 3. research</h1>
        <h2>delving into the problem space</h2>
        <h3>As skincare enthusiasts, we delved into the problem space that people may have when approaching skincare. During the two-week research extensive period, through literature review and market research, we’ve identified several key issues:</h3>
        <p className="first">INFORMATION OVERLOAD.</p>
        <p>TREND-DRIVEN PURCHASES.</p>
        <p>BRANDED PRODUCT RECOMMENDATIONS</p>
      </div>
      <div className="vol-img-1"></div>
    </div>
  </div>
  <div className="slider-controls">
    <button className="prev">prev</button>
    <button className="next">next</button>
  </div>
</div>
      </>
  );
}