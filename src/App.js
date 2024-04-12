import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter} from "react-router-dom"
import './App.css';

//Pages
import Home from './components/Home';
import Scan from './components/Scan';
import About from './components/About';
import Ingredinary from './components/Ingredinary.js';

//Fixed Components
import  Footer  from './components/Footer';

export default function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ingredinary" element={<Ingredinary />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}