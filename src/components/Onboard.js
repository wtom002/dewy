import React from 'react';
export default function Home() {
    return (
        <><div class="home1">
            <h1>how does it work</h1>
            <div class="box-container">
                <div class="box">
                    <img src="../img/home/pink.png"></img>
                    <h2>Upload a clear selfie of your face</h2>
                </div>

                <div class="box">
                    <img src="purple.png"></img>
                    <h2>Answer skin survey</h2>
                </div>
                <div class="box">
                    <img src="../img/home/green.png"></img>
                    <h2>Computer vision analyzes</h2>
                </div>
                <div class="box">
                    <img src="../img/Home.png"></img>
                    <h2>Get results with ingredients & products just for you</h2>
                </div>
            </div>
        </div><div class="grid-container">
                <div class="grid-item">
                    <h1>computer vision</h1>
                    <p>(n.) a multidisciplinary field that enables computers to interpret and make sense of visual information from the world.</p>
                    <h2>The primary goal is to enable computers to extract meaningful insights, recognize patterns, and interpret visual data.</h2>
                </div>
                <div class="grid-item">
                    <img src="image2.jpg" alt="Image 2"></img>
                </div>
                <div class="grid-item">
                    <img src="image3.jpg" alt="Image 3"></img>
                </div>
                <div class="grid-item">
                    <h1>ingredient focus</h1>
                    <p>(n.) ingredients are substances added to cosmetic formulations to provide specific benefits to the skin.</p>
                    <h2>Understanding skincare ingredients is essential for making informed choices about your skincare routine.</h2>
                </div>
            </div></>
      );
    }