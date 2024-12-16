import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import RoundButton from '../components/RoundButton';

const CheckVerifyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email'); // Extract email query param

  // Parse the domain from the email
  const getDomain = (email: string | null) => {
    if (email) {
      const parts = email.split('@');
      return parts.length > 1 ? parts[1].toLowerCase() : null;
    }
    return null;
  };

  // Define actions for specific email providers
  const handleCheckEmail = () => {
    const domain = getDomain(email);

    if (!domain) {
      alert('Invalid email address');
      return;
    }

    switch (domain) {
      case 'gmail.com':
        window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
        break;
      case 'outlook.com':
      case 'hotmail.com':
        window.location.href = 'https://outlook.live.com';
        break;
      case 'yahoo.com':
        window.location.href = 'https://mail.yahoo.com';
        break;
      case 'icloud.com':
        window.location.href = 'https://www.icloud.com/mail';
        break;
      default:
        window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
        break;
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
        <RoundButton
          text="Check Your Email"
          className="rounded-md sm:w-1/3 w-1/2 mb-4"
          onClick={handleCheckEmail}
        ></RoundButton>
        <div className="text-[14px] text-white sm:w-1/3 w-1/2 text-center">
          An email has been sent to {email}. It contains an activation link you
          must click to activate your account.{' '}
        </div>
        <div className="text-[12px] text-white text-center my-[28px]">
          2024© TheGrail All rights reserved
          <br />
          Terms of Service | Privacy Policy | EULA
        </div>
      </div>
    </div>
  );
};

export default CheckVerifyPage;
