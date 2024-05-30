import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';
import NavBar from './NavBar';
import Onboard from './Onboard';

export default function ImageUpload() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp'];

  const handleFileChange = (event) => {
    const file = event.target.files[0];

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

    try {
      const model = await tf.loadLayersModel('../../server/models/my_model.h5'); 
      const image = await readImage(selectedFile);
      const tensor = preprocessImage(image);
      const prediction = model.predict(tensor);
      const result = prediction.dataSync();

      navigate('../result', { state: { result } });
    } catch (error) {
      console.error('Error processing the file', error);
      setError('Error processing the file');
    }
  };

  const readImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => resolve(img);
        img.onerror = reject;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const preprocessImage = (image) => {
    const tensor = tf.browser.fromPixels(image)
      .resizeNearestNeighbor([256, 256]) // Change to the input size of your model
      .toFloat()
      .expandDims();
    return tensor.div(255.0); // Normalize to [0, 1]
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
                  style={{ display: 'none' }}
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
