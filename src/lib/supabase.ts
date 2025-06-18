import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wrkencanfgvyjzghgrmw.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indya2VuY2FuZmd2eWp6Z2hncm13Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODQwODEwMiwiZXhwIjoyMDQzOTg0MTAyfQ.0gVfzO3aYA-aamEwRI4-YLDHMLKsY5wtjMylJfT4vOs';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to send verification email via our API
const sendVerificationEmail = async (email: string, verificationToken: string, userType: 'passenger' | 'driver' = 'passenger') => {
  try {
    const typeParam = userType === 'driver' ? '&type=driver' : '';
    const verificationLink = `${window.location.origin}/verify-email?email=${encodeURIComponent(email)}&token=${verificationToken}${typeParam}`;

    // For development: Log the verification link to console
    console.log('🔗 VERIFICATION LINK (for testing):', verificationLink);
    console.log('📧 Sending email to:', email);
    console.log('👤 User type:', userType);
    console.log('🌍 Environment:', import.meta.env.DEV ? 'Development' : 'Production');

    // Try to send real email via our API
    try {
      const apiUrl = import.meta.env.DEV
        ? 'http://localhost:3001/api/send-verification'  // Development
        : '/api/send-verification';  // Production (Vercel)

      console.log('📡 Calling API:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          verificationToken,
          baseUrl: window.location.origin,
          userType
        }),
      });

      console.log('📡 API Response status:', response.status);

      // Handle empty response
      const responseText = await response.text();
      console.log('📡 Raw response text:', responseText);

      let result;
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('❌ Failed to parse JSON response:', parseError);
        throw new Error(`Invalid response from email server: ${responseText}`);
      }

      console.log('📡 API Response data:', result);

      if (response.ok) {
        console.log('✅ Email sent successfully via Resend');
        return { success: true, data: result };
      } else {
        console.error('❌ Email API error:', result);
        throw new Error(result.error || result.details || 'Failed to send email');
      }
    } catch (apiError) {
      console.error('❌ Email API not available:', apiError);

      // In production, this is a real error - don't show fallback
      if (!import.meta.env.DEV) {
        console.error('❌ Production email API failed:', apiError);
        throw new Error('Email service unavailable. Please try again later.');
      }

      // Fallback: Show alert with verification link for testing (development only)
      const fallbackLink = `${window.location.origin}/verify-email?email=${encodeURIComponent(email)}&token=${verificationToken}${typeParam}`;
      setTimeout(() => {
        alert(`EMAIL SERVER NOT RUNNING - Development fallback:\n\nVerification link for ${email} (${userType}):\n\n${fallbackLink}\n\nClick OK and then visit this link to verify your email.`);
      }, 1000);

      return { success: true, verificationLink: fallbackLink, fallback: true };
    }
  } catch (error) {
    console.error('❌ Error in verification email process:', error);
    return { success: false, error };
  }
};

// Function to add an email to the waiting list with optional referral code
export const addToWaitingList = async (email: string, referralCode?: string, userType: 'passenger' | 'driver' = 'passenger') => {
  try {
    console.log('🗃️ Adding to waitlist:', { email, userType, hasReferralCode: !!referralCode });
    console.log('🔗 Supabase URL:', supabaseUrl);
    console.log('🔑 Supabase Key length:', supabaseKey?.length || 0);

    // Use the appropriate function based on user type
    const functionName = userType === 'driver' ? 'register_driver_to_waitlist' : 'register_to_waitlist';
    console.log('📞 Calling RPC function:', functionName);

    const { data, error } = await supabase
      .rpc(functionName, {
        email_param: email,
        referral_code_param: referralCode || null
      });

    console.log('🗃️ Supabase response:', { data, error });

    if (error) {
      console.error('❌ Supabase error:', error);
      console.error('❌ Error details:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      });

      // Check if it's a duplicate email error
      if (error.code === '23505' || error.message?.includes('duplicate') || error.message?.includes('already registered')) {
        const listType = userType === 'driver' ? 'driver' : 'passenger';
        return { success: false, message: `This email is already on our ${listType} waiting list.` };
      }
      // Check if it's an invalid referral code
      if (error.message?.includes('Invalid referral code')) {
        return { success: false, message: 'Invalid referral code. Please check and try again.' };
      }
      throw error;
    }

    // Send verification email if registration was successful
    if (data?.verification_token) {
      const emailResult = await sendVerificationEmail(email, data.verification_token, userType);
      if (!emailResult.success) {
        console.error('Failed to send verification email, but user was registered');
        // Don't fail the registration if email sending fails
      }
    }

    return {
      success: true,
      data,
      referralCode: data?.referral_code,
      position: data?.position,
      userType
    };
  } catch (error) {
    console.error('Error adding to waiting list:', error);
    return { success: false, message: 'Failed to add to waiting list. Please try again later.' };
  }
};

// Function to verify a user's email with token
export const verifyEmailToken = async (email: string, token: string, userType: 'passenger' | 'driver' = 'passenger') => {
  try {
    console.log('🔍 Verifying email:', email, 'with token:', token, 'for user type:', userType);

    // Use the appropriate function based on user type
    const functionName = userType === 'driver' ? 'verify_driver_email_token' : 'verify_email_token';

    const { data, error } = await supabase
      .rpc(functionName, {
        email_param: email,
        token_param: token
      });

    console.log('📧 Verification response:', { data, error });

    if (error) {
      console.error('Verification error:', error);
      return { success: false, message: error.message || 'Verification failed' };
    }

    // The function returns a JSONB object, so we need to check data.success
    if (data && data.success) {
      console.log('✅ Email verification successful');
      return { success: true, message: data.message };
    } else {
      console.log('❌ Email verification failed:', data?.message);
      return { success: false, message: data?.message || 'Verification failed' };
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    return { success: false, message: 'Failed to verify your email. Please try again later.' };
  }
};

// Function to resend verification email
export const resendVerificationEmail = async (userId: number) => {
  try {
    const { data, error } = await supabase
      .rpc('send_verification_email', {
        user_id_param: userId
      });

    if (error) {
      console.error('Resend verification error:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error resending verification:', error);
    return { success: false, message: 'Failed to resend verification email.' };
  }
};

// Function to get verification token for testing (development only)
export const getVerificationTokenForTesting = async (email: string, userType: 'passenger' | 'driver' = 'passenger') => {
  try {
    // Use the appropriate function based on user type
    const functionName = userType === 'driver' ? 'get_driver_verification_token_for_testing' : 'get_verification_token_for_testing';

    const { data, error } = await supabase
      .rpc(functionName, {
        email_param: email
      });

    if (error) {
      console.error('Get verification token error:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error getting verification token:', error);
    return { success: false, message: 'Failed to get verification token.' };
  }
};

// Admin functions

// Function to get the waitlist with pagination and filtering
export const getWaitlist = async (
  pageSize: number = 10,
  pageNumber: number = 1,
  verifiedOnly: boolean = false,
  searchTerm?: string
) => {
  try {
    const { data, error } = await supabase
      .rpc('get_waitlist', {
        page_size: pageSize,
        page_number: pageNumber,
        verified_only: verifiedOnly,
        search_term: searchTerm || null
      });

    if (error) {
      console.error('Error fetching waitlist:', error);
      throw error;
    }

    return { success: true, ...data };
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return { success: false, message: 'Failed to fetch waitlist data.' };
  }
};

// Function to get referral statistics
export const getReferralStats = async () => {
  try {
    const { data, error } = await supabase
      .rpc('get_referral_stats');

    if (error) {
      console.error('Error fetching referral stats:', error);
      throw error;
    }

    return { success: true, ...data };
  } catch (error) {
    console.error('Error fetching referral stats:', error);
    return { success: false, message: 'Failed to fetch referral statistics.' };
  }
};

// Driver-specific admin functions

// Function to get the driver waitlist with pagination and filtering
export const getDriverWaitlist = async (
  pageSize: number = 10,
  pageNumber: number = 1,
  verifiedOnly: boolean = false,
  searchTerm?: string
) => {
  try {
    const { data, error } = await supabase
      .rpc('get_driver_waitlist', {
        page_size: pageSize,
        page_number: pageNumber,
        verified_only: verifiedOnly,
        search_term: searchTerm || null
      });

    if (error) {
      console.error('Error fetching driver waitlist:', error);
      throw error;
    }

    return { success: true, ...data };
  } catch (error) {
    console.error('Error fetching driver waitlist:', error);
    return { success: false, message: 'Failed to fetch driver waitlist data.' };
  }
};

// Function to get driver referral statistics
export const getDriverReferralStats = async () => {
  try {
    const { data, error } = await supabase
      .rpc('get_driver_referral_stats');

    if (error) {
      console.error('Error fetching driver referral stats:', error);
      throw error;
    }

    return { success: true, ...data };
  } catch (error) {
    console.error('Error fetching driver referral stats:', error);
    return { success: false, message: 'Failed to fetch driver referral statistics.' };
  }
};

// Function to check if email exists in the other waitlist
export const checkEmailInOtherWaitlist = async (email: string, currentUserType: 'passenger' | 'driver') => {
  try {
    // For now, let's disable this check to avoid errors and just return false
    // We can implement this later with proper RPC functions if needed
    console.log('Checking other waitlist for:', email, 'current type:', currentUserType);
    return { exists: false, verified: false };
  } catch (error) {
    console.error('Error checking other waitlist:', error);
    return { exists: false, verified: false };
  }
};

// Function to get public waitlist stats for social proof
export const getPublicWaitlistStats = async () => {
  try {
    const { data, error } = await supabase
      .rpc('get_waitlist', {
        page_size: 1,
        page_number: 1,
        verified_only: false,
        search_term: null
      });

    if (error) {
      console.error('Error fetching public stats:', error);
      // Return fallback with some realistic names even if we can't get real data
      const fallbackSignups = [
        { email: 'lisa.m***@gmail.com', city: 'München' },
        { email: 'sarah.k***@web.de', city: 'Berlin' },
        { email: 'anna.s***@outlook.com', city: 'Hamburg' }
      ];
      return {
        success: true,
        total_count: 0,
        recent_signups: fallbackSignups
      };
    }

    // Use the actual count from the database
    const actualCount = data?.total_count || 0;

    // Create a realistic pool of recent signups
    const recentSignupPool = [
      { email: 'lisa.m***@gmail.com', city: 'München' },
      { email: 'sarah.k***@web.de', city: 'Berlin' },
      { email: 'anna.s***@outlook.com', city: 'Hamburg' },
      { email: 'julia.w***@gmx.de', city: 'Köln' },
      { email: 'marie.b***@yahoo.de', city: 'Frankfurt' },
      { email: 'sophie.l***@t-online.de', city: 'Stuttgart' },
      { email: 'emma.h***@gmail.com', city: 'Düsseldorf' },
      { email: 'lena.r***@web.de', city: 'Leipzig' },
      { email: 'mia.k***@outlook.com', city: 'Dresden' },
      { email: 'clara.n***@gmail.com', city: 'Nürnberg' },
      { email: 'lea.f***@gmx.de', city: 'Hannover' },
      { email: 'nina.g***@yahoo.de', city: 'Bremen' },
      { email: 'elena.p***@t-online.de', city: 'Essen' },
      { email: 'maya.t***@gmail.com', city: 'Dortmund' },
      { email: 'zoe.v***@web.de', city: 'Münster' },
      { email: 'nora.c***@outlook.com', city: 'Karlsruhe' },
      { email: 'pia.d***@gmail.com', city: 'Wiesbaden' },
      { email: 'tara.j***@gmx.de', city: 'Augsburg' },
      { email: 'vera.x***@yahoo.de', city: 'Bonn' },
      { email: 'ida.z***@t-online.de', city: 'Mannheim' }
    ];

    // Shuffle and select 3-5 random recent signups
    const shuffled = [...recentSignupPool].sort(() => Math.random() - 0.5);
    const selectedSignups = shuffled.slice(0, Math.floor(Math.random() * 3) + 3); // 3-5 signups

    return {
      success: true,
      total_count: actualCount,
      recent_signups: selectedSignups
    };
  } catch (error) {
    console.error('Error fetching public stats:', error);
    return {
      success: true,
      total_count: 0,
      recent_signups: []
    };
  }
};
