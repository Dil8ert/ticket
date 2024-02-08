import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Home</a>
        </li>
        {/* <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>MarketCap Data</a>
        </li> */}
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Doge</a>
        </li>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Socials</a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '15px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 25px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};
