// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDySMEAZkjuwpcbO0cjGL1RagYqnSDZrKA',
  authDomain: 'thegrailapp-13fab.firebaseapp.com',
  projectId: 'thegrailapp-13fab',
  storageBucket: 'thegrailapp-13fab.firebasestorage.app',
  messagingSenderId: '145121793931',
  appId: '1:145121793931:web:92eb24bad05340f8e3c18e',
  measurementId: 'G-MRW7J2NTR7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };
