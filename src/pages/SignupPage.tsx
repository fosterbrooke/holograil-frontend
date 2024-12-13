import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './SignupPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebaseConfig';
import {
  getUserByEmail,
  registerUser,
  storeUserData,
} from '../services/user.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import Spinner from '../components/Spinner';
import { FetchError } from '../utils/api';

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recaptcha = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const captchaValue = recaptcha.current?.getValue();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      setIsLoading(false);
      return;
    }

    try {
      // Call signup endpoint
      const userToRegister = {
        displayName: username,
        email: email,
        password: password,
      };

      await registerUser(userToRegister);
      navigate(`/verify-sent?email=${email}`)
    } catch (error: unknown) {
      if (error instanceof FetchError) {
        switch (error.status) {
          case 400:
            if (error.message === 'Email already registered') {
              alert(
                'This email is already registered. Please try logging in instead.'
              );
            } else {
              alert('Invalid signup data. Please check your information.');
            }
            break;
          case 429:
            alert('Too many signup attempts. Please try again later.');
            break;
          default:
            alert('An error occurred during signup. Please try again.');
        }
      }
    } finally {
      setIsLoading(false);
      recaptcha.current?.reset();
    }
  };

  const handleGoogleSignIn = async () => {
    const captchaValue = recaptcha.current?.getValue();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      const fetchedUser = storeUserData(firebaseUser);

      // Dispatch to state management
      dispatch(setUser(fetchedUser));

      if (firebaseUser.email) {
        const user = await getUserByEmail(firebaseUser.email);
        if (!user) {
          await registerUser(firebaseUser);
          navigate(`/verify-sent?email=${firebaseUser.email}`)
        } else {
          if (!user.is_email_verified) {
            navigate('/login');
          } else {
            const storedSelectedAccountsItem = localStorage.getItem(
              'selectedAccountsItem'
            );

            if (storedSelectedAccountsItem) {
              navigate(`/accounts/${storedSelectedAccountsItem}`);
            } else {
              navigate('/accounts/overview');
            }
          }
        }
      }
    } catch (error) {
      console.error('Error during Google Sign-Up:', error);
      alert('Failed to sign up with Google. Please try again.');
    } finally {
      recaptcha.current?.reset();
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
                Sign Up
              </div>
              <div className="text-[13px]">
                <label htmlFor="username" className="text-white">
                  User Name
                </label>
                <input
                  placeholder="User Name"
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="mt-2 w-full h-[32px] border border-[#BCBEC0] rounded-[5px] p-2 px-[16px]"
                />
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
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-2 w-full h-[32px] border border-[#BCBEC0] rounded-[5px] p-2 px-[16px]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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
                disabled={isLoading}
                className="w-full flex justify-center items-center space-x-4 bg-[#003465] text-white pt-[8px] pb-[13px] rounded-[7.11px] hover:scale-[101%] transition duration-200 font-bold disabled:opacity-50"
              >
                <Spinner loading={isLoading} size="sm" color="white" />
                <div className="text-[16px] h-[19px]">Sign Up</div>
              </button>
              <div className="text-white text-[13px] text-center h-[16px]">
                or continue with
              </div>
              <button
                type="button"
                className="rounded-[7.11px] h-[35.08px] flex justify-center p-[9px] bg-white border border-[#BCBEC0]"
                onClick={handleGoogleSignIn}
              >
                <img src="/signup/Group 2212.svg" alt="Google Sign In" />
              </button>
              <div className="w-full">
                <ReCAPTCHA
                  ref={recaptcha}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
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

export default SignupPage;
