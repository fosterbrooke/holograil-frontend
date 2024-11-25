import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { User } from '../../types/User';

const Avatar: React.FC = () => {
  const user = useSelector(
    (state: RootState) => state.user.user
  ) as User | null;
  const photoURL = user?.photoURL || '';

  return (
    <div className="flex flex-shrink-0">
      {photoURL ? (
        <img
          src={photoURL}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-300" // Adjust size and styles as needed
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
          {/* Placeholder for avatar if no photoURL is available */}
          <span>No Image</span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
