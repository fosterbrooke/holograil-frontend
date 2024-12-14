import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../services/user.service';
import Spinner from '../components/Spinner';

const VerifyEmail: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );

  useEffect(() => {
    const verify = async () => {
      try {
        if (!token) throw new Error('No token provided');

        await verifyEmail(token);
        setStatus('success');
        // Redirect to login after successful verification
        setTimeout(() => navigate('/login'), 3000);
      } catch (error) {
        setStatus('error');
        console.error('Email verification failed:', error);
      }
    };

    verify();
  }, []);

  return (
    <div className="flex items-center justify-center sm:p-32 p-12 bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        {status === 'loading' && (
          <div className="text-center">
            <Spinner loading={status === 'loading'} size="sm" />
            <p className="text-lg">Verifying your email...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Email Verified!
            </h2>
            <p>Your email has been successfully verified.</p>
            <p className="text-sm text-gray-500 mt-2">
              Redirecting to login page...
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Verification Failed
            </h2>
            <p>Sorry, we couldn&apos;t verify your email.</p>
            <p className="text-sm text-gray-500 mt-2">
              The link may have expired or is invalid.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
