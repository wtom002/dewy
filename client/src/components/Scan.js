import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from './NavBar';
import * as tf from "@tensorflow/tfjs";
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
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
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
