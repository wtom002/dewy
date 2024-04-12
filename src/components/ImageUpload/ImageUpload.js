import React, { useRef, useEffect } from 'react';
import './ImageUpload.css';
import NavBar from '../NavBar/NavBar';

export default function ImageUpload() {
  const handleScanNow = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.play();
        document.getElementById('camera-preview').appendChild(videoElement);
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  };

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

  useEffect(() => {
    return () => {
      const videoElement = document.querySelector('video');
      if (videoElement) {
        videoElement.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

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
