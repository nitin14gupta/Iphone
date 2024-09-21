import React from 'react';
import './Rotation.css';
import { rot1, rot2, rot3, rot4, rot5, rot6, rot7, rot8, modelImg, rotationbgImg } from '../utils';

const Rotation = () => {
  const images = [rot1, rot2, rot3, rot4, rot5, rot6, rot7, rot8];

  return (
    <div className="banner" style={{ backgroundImage: `url(${rotationbgImg})` }}>
      <div className="slider">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="item" 
            style={{ '--position': index + 1, '--quantity': images.length }}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="content">
        <h1 data-content="IPHONE PRO">IPHONE PRO</h1>
        <div className="author">
          <h2>NITIN GUPTA</h2>
          <p><b>Web Design</b></p>
          <p>The Best Model You Will Ever Get. It is the best of them all.</p>
        </div>
        <div className="model" style={{ backgroundImage: `url(${modelImg})` }}></div>
      </div>
    </div>
  );
};

export default Rotation;
