import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebaseConfig';
import { FirebaseError } from 'firebase/app';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { storeUserData } from '../services/user.service';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recaptcha = useRef<ReCAPTCHA | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const captchaValue = recaptcha.current?.getValue();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }
    try {
      // Proceed with form submission
      // const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/verify`, {
      //   method: 'POST',
      //   body: JSON.stringify({ captchaValue }),
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      // });

      // if (!response.ok) {
      //   throw new Error('CAPTCHA verification failed');
      // }

      await signInWithEmailAndPassword(auth, email, password);

      // alert('Form submission successful!');
      // console.log('Form submitted with CAPTCHA value:', captchaValue);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        switch (errorCode) {
          case 'auth/invalid-email':
            alert('Please Enter a valid email address');
            break;
          case 'auth/user-not-found':
            alert('User not found');
            break;
          case 'auth/wrong-password':
            alert('Incorrect Password. Try again.');
            break;
          case 'auth/internal-error':
            alert('Please enter a valid password');
            break;
        }
      } else {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred.');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user; // This is of type FirebaseUser

      // Store user data and get the fetched user object
      const fetchedUser = storeUserData(firebaseUser);

      // Dispatch to state management
      dispatch(setUser(fetchedUser));

      // Navigate after successful sign-in
      navigate('/accounts/overview');
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center custom-radial-gradient">
      <div
        style={{ backgroundColor: 'rgba(88, 130, 193, 0.28)' }}
        className="flex flex-col rounded-lg shadow-lg rounded-[28.46px] items-center my-[21px]"
      >
        <Link to="/">
          <img
            src="/logo2.png"
            className="w-[213px] my-[40px] cursor-pointer"
            alt="Logo"
          />
        </Link>
        <div className="w-[302px] mx-[148px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              <div className="text-[24px] font-bold text-white h-[29px]">
                Login
              </div>
              <div className="text-[13px]">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  placeholder="username@gmail.com"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full h-[32px] border border-[#BCBEC0] rounded-[5px] p-2 px-[16px]"
                />
              </div>
              <div className="text-[13px]">
                {' '}
                {/* Relative positioning for the icon */}
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-2 w-full h-[32px] border border-[#BCBEC0] rounded-[5px] p-2 px-[16px]" // Add padding to avoid overlap with icon
                  />
                  {/* Eye icon for toggling password visibility */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                    className="absolute inset-y-0 right-0 flex items-center pr-4"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-600 mt-2" />
                    ) : (
                      <FaEye className="text-gray-600 mt-2" />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#003465] text-white pt-[8px] pb-[13px] rounded-[7.11px] hover:scale-[101%] transition duration-200 font-bold "
              >
                <div className="text-[16px] h-[19px]">Login</div>
              </button>
              <div className="text-white text-[13px] text-center h-[16px]">
                or continue with
              </div>
              <button
                type="button"
                className="rounded-[7.11px] h-[35.08px] flex justify-center p-[9px] bg-white border border-[#BCBEC0]"
                onClick={handleGoogleSignIn}
              >
                {' '}
                <img src="/signup/Group 2212.svg" />
              </button>
              {/* Google reCAPTCHA */}
              <div className="w-full">
                <ReCAPTCHA
                  ref={recaptcha}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Use environment variable for site key
                />
              </div>
            </div>
          </form>
        </div>
        <div className="text-[10px] text-white text-center my-[28px]">
          2024© TheGrail All rights reserved
          <br />
          Terms of Service | Privacy Policy | EULA
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
