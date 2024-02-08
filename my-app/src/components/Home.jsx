import React, { useState } from 'react';
import pepeVideo from './videoPEPE.MP4';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handleCardClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Website Title</h1>
      <p style={styles.description}>Description of the website goes here. This is a placeholder text.</p>
      <div style={styles.cardsContainer}>
        <div style={styles.card} onClick={handleCardClick}>
          Card 1
        </div>
        <div style={styles.card} onClick={handleCardClick}>
          Card 2
        </div>
      </div>
      {showVideo && (
        <div className="video-container">
          <video width="520" height="340" controls>
            <source src={pepeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleCloseVideo} style={styles.closeButton}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
    container: {
      textAlign: 'center',
      padding: '50px 20px',
      // backgroundColor: '#f2f2f2',
    },
    title: {
      fontSize: '36px',
      color: '#333',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      color: '#666',
      marginBottom: '40px',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
    },
    card: {
      width: '200px',
      height: '150px',
      backgroundColor: '#89CFF0',
      margin: '0 10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    cardText: {
      fontSize: '24px',
      color: '#fff',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    cardHover: {
      transform: 'scale(1.05)',
      backgroundColor: '#3F8EFC',
    },
    videoContainer: {
      position: 'relative',
    },
    video: {
      width: '520px',
      height: '340px',
      borderRadius: '8px',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  
