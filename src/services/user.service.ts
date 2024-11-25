import { User as FirebaseUser } from 'firebase/auth';
import { User } from '../types/User';

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
  console.log(fetchedUser);

  // Store user in local storage
  localStorage.setItem('user', JSON.stringify(fetchedUser));

  return fetchedUser;
};
