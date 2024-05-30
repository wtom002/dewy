import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from './NavBar';
/*import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "../utilities";
import Webcam from "react-webcam";*/
import Onboard from './Onboard';

export default function ImageUpload() {
 /* const webcamRef = useRef(null);
  const canvasRef = useRef(null);*/
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp'];

    if (file && validTypes.includes(file.type)) {
      setSelectedFile(file);
      setError('');
    } else {
      setSelectedFile(null);
      setError('Please upload a file in .jpg, .jpeg, .png, or .bmp format.');
    }
  };

  const handleUpload = async () => {     
    if (!selectedFile) {
      setError('No file selected or invalid file format.');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('../result', { state: { result: response.data } });
    } catch (error) {
      console.error('Error uploading the file', error);
      setError('Error uploading the file');
    }
  };

  /*const runFacemesh = async () => {
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
      webcamRef.current.video.readyState === 4 &&
      canvasRef.current !== null
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      video.width = videoWidth;
      video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      await video.play();

      const face = await net.estimateFaces(video);

      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(() => {
        drawMesh(face, ctx);
      });
    } else {
      setTimeout(() => detect(net), 200);
    }
  };

  useEffect(() => { runFacemesh(); }, []);*/

  return (
    <>
      <div className="image-upload">
        <div className="dbanner bg-scan banner-l">
          <div>
            <NavBar darkMode={true} />
            <div id="camera-preview"></div>
            <div>
              <h1>instant skin analysis</h1>
              <h2>smart scan. targeted care.</h2>
              <div className="scan-buttons">
                
                  <button onClick={handleUpload}>SCAN NOW</button>
                
                <button onClick={() => fileInputRef.current.click()}>UPLOAD IMAGE</button>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'None' }}
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </div>
              <h2>photo tips and tricks</h2>
            </div>
          </div>
        </div>
      </div>
      <Onboard />
    </>
  );
}
