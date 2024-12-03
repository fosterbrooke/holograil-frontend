import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

// Simple styles for the NotFoundPage
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '16px',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '24px',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff', // Bootstrap primary color
    textDecoration: 'none',
  },
};

export default NotFoundPage;
