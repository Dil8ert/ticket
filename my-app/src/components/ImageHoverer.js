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
    const { width, height, top } = event.target.getBoundingClientRect();
    const x = offsetX + window.scrollX + 10;
    const y = offsetY + window.scrollY + height + 620;
    setTooltipPosition({ x, y });
  };
  console.log(tooltipPosition);
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
        coords="50,355,140,435"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Floki's signature hat"
        shape="rect"
        coords="150,145,290,225"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Sonics blue shirt"
        shape="rect"
        coords="160,325,255,445"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Sonics red shoes"
        shape="rect"
        coords="135,470,270,555"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Sonic's gloves"
        shape="rect"
        coords="275,365,365,465"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Pepe's green skin"
        shape="rect"
        coords="245,225,315,335"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Doge's Eyes"
        shape="rect"
        coords="145,230,245,270"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Doge's Nose"
        shape="rect"
        coords="170,270,200,295"
        onMouseEnter={handleMouseEnter}
        onMouseMove={updateTooltipPosition}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />

      <area
        alt="Doge's Mouth"
        shape="rect"
        coords="165,295,235,315"
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
