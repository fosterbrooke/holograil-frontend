import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust the import based on your project structure

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user.user); // Get user from Redux store
  const loading = useSelector((state: RootState) => state.user.loading);

  if (!user) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <div>Loading...</div>; // Or return null
  }

  return <>{children}</>; // Render children if authenticated
};

export default ProtectedRoute;
