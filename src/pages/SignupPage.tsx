import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './SignupPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebaseConfig';
import { storeUserData } from '../services/user.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const SignupPage: React.FC = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      // Prepare user data for backend
      // const userName = encodeURIComponent(firebaseUser.displayName || '');
      // const userEmail = encodeURIComponent(firebaseUser.email || '');
      // const userProfilePic = encodeURIComponent(firebaseUser.photoURL || '');

      // Send data to your backend for further processing
      // const response = await fetch(
      //   `${import.meta.env.VITE_RECAPTCHA_SITE_KEY}/users/google-signin?name=${userName}&email=${userEmail}&picture=${userProfilePic}`,
      //   {
      //     method: "POST",
      //     headers: {
      //       accept: "application/json",
      //     },
      //   }
      // );

      // const data = await response.json();

      // Validate that the response matches the User interface
      // if (response.ok) {
      // if (true) {
      // Store user data and get the fetched user object from the backend
      const fetchedUser = storeUserData(firebaseUser);

      // Dispatch to state management
      dispatch(setUser(fetchedUser));

      // Retrieve selected item from local storage
      const storedSelectedAccountsItem = localStorage.getItem(
        'selectedAccountsItem'
      );

      // Navigate based on the stored item or default to overview
      if (storedSelectedAccountsItem) {
        navigate(`/accounts/${storedSelectedAccountsItem}`);
      } else {
        navigate('/accounts/overview');
      }
      // } else {

      // console.error(data.detail);
      // alert('Failed to sign in: ' + data.detail);
      //}
    } catch (error) {
      console.error('Error during Google Sign-Up:', error);
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
              <div className=" text-[13px]">
                <label htmlFor="username" className="text-white">
                  User Name
                </label>
                <input
                  placeholder="User Name"
                  type="text"
                  id="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    console.log(username);
                  }}
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(email);
                  }}
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                      console.log(password);
                    }}
                    required
                    className="mt-2 w-full h-[32px] border border-[#BCBEC0] rounded-[5px] p-2 px-[16px] relative" // Add padding to avoid overlap with icon
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
                {' '}
                <img src="/signup/Group 2212.svg" />
              </button>
              {/* Google reCAPTCHA */}
              <div className="w-full">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Use environment variable for site key
                  onChange={handleCaptchaChange}
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
