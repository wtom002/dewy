// // import React, { useRef, useEffect } from 'react'
// // import NavBar from './NavBar';

// // export default function ImageUpload() {
// //   const handleScanNow = () => {
// //     navigator.mediaDevices.getUserMedia({ video: true })
// //       .then((stream) => {
// //         const videoElement = document.createElement('video');
// //         videoElement.srcObject = stream;
// //         videoElement.play();
// //         document.getElementById('camera-preview').appendChild(videoElement);
// //       })
// //       .catch((error) => {
// //         console.error('Error accessing the camera:', error);
// //       });
// //   };

// //   const handleUploadImage = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       console.log('Uploaded file:', file);
// //     }
// //   };

// //   const fileInputRef = useRef(null);

// //   useEffect(() => {
// //     return () => {
// //       const videoElement = document.querySelector('video');
// //       if (videoElement) {
// //         videoElement.srcObject.getTracks().forEach(track => track.stop());
// //       }
// //     };
// //   }, []);

// //   return (
// //     <div className="image-upload">
// //     <div className="container-fluid bg-image">
// //       <div className="row">
        
// //       <NavBar darkMode={true} />
// //           <div className="d-flex align-items-center text-center mx-auto vh-100">
// //             <div>
// //               <h2>instant skin analysis</h2>
// //               <div className="mt-4">
// //                 <button onClick={handleScanNow}>SCAN NOW</button>
// //                 <button onClick={handleUploadImage}>UPLOAD IMAGE</button>
// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   style={{ display: 'none' }}
// //                   onChange={handleFileChange}
// //                   ref={fileInputRef}
// //                 />
// //               </div>
// //             </div>
// //         </div>
// //       </div>
// //       </div>
// //       </div>
// //   );
// // }

import React, { useRef, useEffect, useState, ReactDOM, render } from 'react';
import { Link  } from 'react-router-dom';
import NavBar from './NavBar';
import * as tf from "@tensorflow/tfjs"
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "../utilities";
import Webcam from "react-webcam";
import Onboard from './Onboard';
//temp fix for demo

export default function ImageUpload() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //const [showWebcam, setShowWebcam] = useState(false);
  

  // const toggleWebcam = () => {
  //   setShowWebcam(!showWebcam);
  // };

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Uploaded file:', file);
    }
  };

  const fileInputRef = useRef(null);


  const runFacemesh = async () => {
    const model = facemesh.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
      runtime: "tfjs",
      solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
    };
    const detector = await facemesh.createDetector(model, detectorConfig);
    setInterval(() => {
      detect(detector);
    }, 10);
  };

  const detect = async (net) => {
  if (
    typeof webcamRef.current !== "undefined" &&
    webcamRef.current !== null &&
    webcamRef.current.video.readyState === 4
  ) {
    // Get Video Properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    // Wait for video to load metadata
    await video.play();

    // Make Detections
    const face = await net.estimateFaces(video);
    //console.log(face);

    // Get canvas context
    const ctx = canvasRef.current.getContext("2d");
    requestAnimationFrame(()=>{drawMesh(face, ctx)});
  } else {
    // Retry detection after a short delay if video is not ready
    setTimeout(() => detect(net), 200);
  }
};


  useEffect(()=>{runFacemesh()}, []);

  return (
    
    <><div className="image-upload">
      <div className="container-fluid bg-image">
        <div className="row">
          <NavBar darkMode={true} />
          <div className="col-md-6 p-5">
            <div id="camera-preview"></div>
          </div>
          <div className="col-md-6 p-5 d-flex align-items-center">
            <div>
              <h2>instant skin analysis</h2>
              <h3>smart scan. targeted care.</h3>
              <div className="mt-4">
                <Link to="../result" /*temp fix for demo*/>
                  <button /*onClick={useSubmitScan}*/>SCAN NOW</button>
                </Link>
                <Webcam
                  ref={webcamRef}
                  style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                  }} />

                <canvas
                  ref={canvasRef}
                  style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                  }} />
                <button onClick={handleUploadImage}>UPLOAD IMAGE</button>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  ref={fileInputRef} />
              </div>
              <h3>photo tips and tricks</h3>
            </div>
          </div>
        </div>
      </div>
    </div><Onboard /></>
  );
}