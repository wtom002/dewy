import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter} from "react-router-dom"

//Pages
import Home from './components/Home';
import Scan from './components/Scan';
import About from './components/About';
import Ingredinary from './components/Ingredinary';
import ResultsPage from './components/ResultsPage'

//Fixed Components
import  Footer  from './components/Footer';

export default function App() {
  const root = document.getElementById('root');
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/ingredinary" element={<Ingredinary/>} />
        <Route path="/scan" element={<Scan/>} />
        <Route path="/result" element={<ResultsPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}