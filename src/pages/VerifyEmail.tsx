import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmailToken } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState<string>('');
  const [userType, setUserType] = useState<'passenger' | 'driver'>('passenger');

  useEffect(() => {
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    const currentUserType = searchParams.get('type') as 'passenger' | 'driver' || 'passenger';

    setUserType(currentUserType);

    if (!email || !token) {
      setVerificationStatus('error');
      setMessage('Invalid verification link. Please check your email for the correct link.');
      return;
    }

    const verifyEmail = async () => {
      try {
        console.log('🚀 Starting verification process for:', email, token, 'user type:', currentUserType);
        const result = await verifyEmailToken(email, token, currentUserType);
        console.log('📧 Verification result:', result);

        if (result.success) {
          console.log('✅ Verification successful');
          setVerificationStatus('success');
          setMessage(result.message || 'Your email has been verified successfully! You can now close this page.');
        } else {
          console.log('❌ Verification failed:', result.message);
          setVerificationStatus('error');
          setMessage(result.message || 'Verification failed. The link may be expired or invalid.');
        }
      } catch (error) {
        console.error('💥 Verification error:', error);
        setVerificationStatus('error');
        setMessage('An error occurred during verification. Please try again later.');
      }
    };

    verifyEmail();
  }, [searchParams]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fa9de3]/10 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        {verificationStatus === 'loading' && (
          <>
            <Loader2 className="h-16 w-16 text-[#fa9de3] mx-auto mb-4 animate-spin" />
            <h1 className="text-2xl font-bold mb-4">Verifying Your Email</h1>
            <p className="text-gray-600">Please wait while we verify your email address...</p>
          </>
        )}

        {verificationStatus === 'success' && (
          <>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-green-700">Email Verified!</h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Your position in the {userType} waitlist is now confirmed</li>
                  <li>• If you used a referral code, the referrer will move up {userType === 'driver' ? '5' : '10'} places</li>
                  <li>• You'll receive updates about our launch</li>
                  <li>• You can refer other {userType === 'driver' ? 'drivers' : 'passengers'} to move up {userType === 'driver' ? '5' : '10'} places per referral</li>
                </ul>
              </div>
              <Button
                onClick={handleGoHome}
                className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-semibold w-full"
              >
                Return to Homepage
              </Button>
            </div>
          </>
        )}

        {verificationStatus === 'error' && (
          <>
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-red-700">Verification Failed</h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Possible reasons:</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• The verification link has expired (24 hours)</li>
                  <li>• The link has already been used</li>
                  <li>• The link is malformed or incomplete</li>
                </ul>
              </div>
              <Button
                onClick={handleGoHome}
                className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-semibold w-full"
              >
                Return to Homepage
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
