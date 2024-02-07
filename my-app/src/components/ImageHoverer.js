import React, { useState } from 'react';
import characterImage from './characterImage.png';
// import './App.css';

const ImageHoverer = () => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = event => {
    const areaId = event.target.alt;
    setHoveredArea(areaId);
    updateTooltipPosition(event);
  };

  const handleMouseLeave = () => {
    setHoveredArea(null);
  };

  const updateTooltipPosition = event => {
    const { offsetX, offsetY } = event.nativeEvent;
    const { width, height } = event.target.getBoundingClientRect();
    const x = offsetX + window.pageXOffset + 10;
    const y = offsetY + window.pageYOffset - height - 20; // Adjust tooltip placement above the hovered area
    setTooltipPosition({ x, y });
  };

  return (
    <div
      className="character-container"
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <img
        src={characterImage}
        alt="2D Character"
        className="character-image"
        useMap="#character-map"
        onMouseLeave={handleMouseLeave}
      />
      {hoveredArea && (
        <div
          className="tooltip"
          style={{
            position: 'absolute',
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '14px',
          }}
        >
          {hoveredArea}
        </div>
      )}
      <map name="character-map">
        <area
          alt="Sonic's gloves"
          shape="rect"
          coords="60,425,160,525"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Floki's signature hat"
          shape="rect"
          coords="180,180,350,280"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Sonics blue shirt"
          shape="rect"
          coords="200,390,300,550"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Sonics red shoes"
          shape="rect"
          coords="165,580,325,680"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Sonic's gloves"
          shape="rect"
          coords="340,445,450,565"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Pepe's green skin"
          shape="rect"
          coords="290,280,390,400"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Doge's Eyes"
          shape="rect"
          coords="180,280,290,330"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Doge's Nose"
          shape="rect"
          coords="210,330,240,360"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        <area
          alt="Doge's Mouth"
          shape="rect"
          coords="200,365,280,385"
          onMouseEnter={handleMouseEnter}
          onMouseMove={updateTooltipPosition}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
      </map>
    </div>
  );
};

export default ImageHoverer;
