import { User as FirebaseUser } from 'firebase/auth';
import { User } from '../types/User';
import { fetchAPI } from '../utils/api';

export const storeUserData = (firebaseUser: FirebaseUser) => {
  const user: User = {
    id: firebaseUser.uid,
    name: firebaseUser.displayName || 'admin',
    email: firebaseUser.email || 'admin@gmail.com',
    photoURL: firebaseUser.photoURL || '',
  };
  const fetchedUser = {
    user: user,
    accecss_token: '',
  };

  // Store user in local storage
  localStorage.setItem('user', JSON.stringify(fetchedUser));

  return fetchedUser;
};

export const registerUser = async (firebaseUser: FirebaseUser) => {
  try {
    await fetchAPI('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        username: firebaseUser.displayName || 'admin',
        email: firebaseUser.email || 'admin@gmail.com',
        password: '123123123',
        avatar_url: firebaseUser.photoURL || '',
      }), // Empty body as per the sample
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
  }
};
