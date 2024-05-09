import React from 'react';
export default function Home() {
    return (
        <><div className="home1">
            <h1>how does it work</h1>
            <div className="box-container">
                <div className="box">
                    <img src="../img/home/pink.png" alt="pink"></img>
                    <h2>Upload a clear selfie of your face</h2>
                </div>

                <div className="box">
                    <img src="../img/home/purple.png" alt="purple"></img>
                    <h2>Answer skin survey</h2>
                </div>
                <div className="box">
                    <img src="../img/home/green.png" alt="green"></img>
                    <h2>Computer vision analyzes</h2>
                </div>
                <div className="box">
                    <img src="../img/Home.png" alt="splash art"></img>
                    <h2>Get results with ingredients & products just for you</h2>
                </div>
            </div>
        </div><div className="grid-container">
                <div className="grid-item">
                    <h1>computer vision</h1>
                    <p>(n.) a multidisciplinary field that enables computers to interpret and make sense of visual information from the world.</p>
                    <h2>The primary goal is to enable computers to extract meaningful insights, recognize patterns, and interpret visual data.</h2>
                </div>
                <div className="grid-item">
                    <img src="image2.jpg" alt="pic 2"></img>
                </div>
                <div className="grid-item">
                    <img src="image3.jpg" alt="pic 3"></img>
                </div>
                <div className="grid-item">
                    <h1>ingredient focus</h1>
                    <p>(n.) ingredients are substances added to cosmetic formulations to provide specific benefits to the skin.</p>
                    <h2>Understanding skincare ingredients is essential for making informed choices about your skincare routine.</h2>
                </div>
            </div></>
      );
    }