import React, { useRef, useEffect } from 'react';
import './ImageUpload.css';
import NavBar from '../NavBar/NavBar';
import * as tf from "@tensorflow/tfjs"
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./utilities";
import Webcam from "react-webcam";

export default function ImageUpload() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //#######################old webcam
  // const handleScanNow = () => {
  //   navigator.mediaDevices.getUserMedia({ video: true })
  //     .then((stream) => {
  //       const videoElement = document.createElement('video');
  //       videoElement.srcObject = stream;
  //       videoElement.play();
  //       document.getElementById('camera-preview').appendChild(videoElement);
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing the camera:', error);
  //     });
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
 // ####################old webcam
  // useEffect(() => {
  //   return () => {
  //     const videoElement = document.querySelector('video');
  //     if (videoElement) {
  //       videoElement.srcObject.getTracks().forEach(track => track.stop());
  //     }
  //   };
  // }, []);

  const runFacemesh = async () => {
    // OLD MODEL
    // const net = await facemesh.load({
    //   inputResolution: { width: 640, height: 480 },
    //   scale: 0.8,
    // });
    // NEW MODEL
    const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
    setInterval(() => {
      detect(net);
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

      // Make Detections
      // OLD MODEL
      //       const face = await net.estimateFaces(video);
      // NEW MODEL
      const face = await net.estimateFaces({input:video});
      console.log(face);

      // Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(()=>{drawMesh(face, ctx)});
    }
  };   

  useEffect(()=>{runFacemesh()}, []);

  return (
    <div className="image-upload">
    <div className="container-fluid bg-image rounded p-4">
      <div className="row">
      <NavBar/>
        <div className="col-md-6 p-5">
          <div id="camera-preview"></div>
        </div>
        <div className="col-md-6 p-5 d-flex align-items-center">
            <div >
              <h2>instant skin analysis</h2>
              <h3>smart scan. targeted care.</h3>
              <div className="mt-4">
                <button onClick={handleScanNow}>SCAN NOW</button>
                <button onClick={handleUploadImage}>UPLOAD IMAGE</button>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </div>
              <h3>photo tips and tricks</h3>
            </div>
          </div>
      </div>
      </div>
      </div>
  );
}
