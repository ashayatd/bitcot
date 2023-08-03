import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  message: {
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

function Landing() {
  return (
    <div style={styles.container}>
      <p style={styles.message}>Kindly visit <Link to="/login">Login</Link> <Link to="/signup">Signup</Link></p>
      
    </div>
  );
}

export default Landing;
