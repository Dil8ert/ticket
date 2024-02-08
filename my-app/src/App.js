import React from 'react';
import pepeVideo from './components/videoPEPE.MP4';
import './App.css';
import ImageHoverer from './components/ImageHoverer';
import PriceTracker from './components/PriceTracker'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="main-container">
      <div>
        <Navbar />
      </div>
      {/* <div>
        <ImageHoverer />
      </div> */}
      <div>
        <Home />
      </div>
      <div className="bottom-panel">
        <h1>Market-Cap</h1>
        <br />
        <br />
        <PriceTracker />
      </div>
    </div>
  );
}

export default App;
