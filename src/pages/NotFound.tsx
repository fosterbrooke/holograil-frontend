import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideHeader } from '../redux/userSlice';

export const NotFoundWrapper: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Hide the header when navigating to the 404 page
    dispatch(hideHeader());
  }, [dispatch]);

  return <NotFound />;
};

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-lg">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
