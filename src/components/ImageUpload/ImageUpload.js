import React, { useRef } from 'react';
import './ImageUpload.css';

export default function ImageUpload() {
  const handleScanNow = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.play();
        document.body.appendChild(videoElement);
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  };

  const handleUploadImage = () => {
    //trigger file input prompt
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // handle the uploaded file send to model
      console.log('Uploaded file:', file);
    }
  };

  const fileInputRef = useRef(null);

  return (
    <div className="container-fluid bg-image rounded p-4">
      <div className="row">
        <div className="col-md-6 p-5">
          <h1>dewy</h1>
        </div>
        <div className="col-md-6 p-5">
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item mr-3">Scan</li>
              <li className="list-inline-item mr-3">Ingredeniary</li>
              <li className="list-inline-item">About Us</li>
            </ul>
          </nav>
          <div className="d-flex align-items-center text-center mx-auto vh-100">
            <div>
              <h2>instant skin analysis</h2>
              <h3>smart scan. targeted care.</h3>
              <div className="mt-4">
                <button className="btn btn-primary mr-2" onClick={handleScanNow}>SCAN NOW</button>
                <button className="btn btn-secondary" onClick={handleUploadImage}>UPLOAD IMAGE</button>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
