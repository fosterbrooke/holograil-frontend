import { User as FirebaseUser } from 'firebase/auth';
import { User, UserRegister } from '../types/User';
import { fetchAPI, FetchError } from '../utils/api';

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

export const loginUser = async (email: string, password: string) => {
  const response = await fetchAPI('/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const userData = {
    user: {
      email: response.user,
    },
    access_token: response.access_token,
  };

  localStorage.setItem('user', JSON.stringify(userData));

  return userData;
};

export const resendVerificationEmail = async (email: string): Promise<void> => {
  try {
    await fetchAPI(`/users/resend-verification?email=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      switch (error.status) {
        case 404:
          throw new Error('User not found');
        case 429:
          throw new Error('Too many requests. Please try again later');
        case 400:
          throw new Error('Invalid email address');
        default:
          throw new Error('Failed to resend verification email');
      }
    }
  }
};

export const registerUser = async (user: FirebaseUser | UserRegister) => {
  try {
    const response = await fetchAPI('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        username: user.displayName || 'admin',
        email: user.email || 'admin@gmail.com',
        password: 'password' in user ? user.password : '',
        avatar_url: 'photoURL' in user ? user.photoURL : '',
      }), // Empty body as per the sample
    });

    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const response = await fetchAPI(
      `/users?email=${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    console.error('Error getting a user: ', error);
    throw error;
  }
};

export const verifyEmail = async (token: string): Promise<void> => {
  return await fetchAPI(`/users/verify-email/${token}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  });
};
