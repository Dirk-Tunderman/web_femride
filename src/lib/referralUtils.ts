/**
 * Utility functions for handling referral codes across the application
 */

const REFERRAL_CODE_KEY = 'femrideReferralCode';

/**
 * Extract referral code from URL parameters and store it
 * @param url - The current URL (optional, defaults to window.location)
 * @returns The referral code if found, null otherwise
 */
export const extractAndStoreReferralCode = (url?: string): string | null => {
  try {
    const currentUrl = url || window.location.href;
    const urlObj = new URL(currentUrl);
    const ref = urlObj.searchParams.get('ref');
    
    if (ref) {
      // Store referral code in localStorage for persistence
      localStorage.setItem(REFERRAL_CODE_KEY, ref);
      
      // Clean URL by removing the ref parameter
      urlObj.searchParams.delete('ref');
      
      // Update browser URL without page reload
      if (typeof window !== 'undefined' && window.history) {
        window.history.replaceState({}, '', urlObj.toString());
      }
      
      return ref;
    }
    
    return null;
  } catch (error) {
    console.error('Error extracting referral code:', error);
    return null;
  }
};

/**
 * Get stored referral code from localStorage
 * @returns The stored referral code or null
 */
export const getStoredReferralCode = (): string | null => {
  try {
    return localStorage.getItem(REFERRAL_CODE_KEY);
  } catch (error) {
    console.error('Error getting stored referral code:', error);
    return null;
  }
};

/**
 * Clear stored referral code (useful after successful signup)
 */
export const clearStoredReferralCode = (): void => {
  try {
    localStorage.removeItem(REFERRAL_CODE_KEY);
  } catch (error) {
    console.error('Error clearing stored referral code:', error);
  }
};

/**
 * Get referral code from URL or localStorage
 * This is the main function to use in components
 * @returns The referral code from URL (priority) or localStorage
 */
export const getReferralCode = (): string | null => {
  // First try to extract from URL
  const urlRef = extractAndStoreReferralCode();
  if (urlRef) {
    return urlRef;
  }
  
  // Fallback to stored referral code
  return getStoredReferralCode();
};

/**
 * Generate a shareable referral URL
 * @param referralCode - The referral code to include
 * @param baseUrl - The base URL (defaults to https://femride.de)
 * @returns The complete shareable URL
 */
export const generateReferralUrl = (referralCode: string, baseUrl: string = 'https://femride.de'): string => {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('ref', referralCode);
    return url.toString();
  } catch (error) {
    console.error('Error generating referral URL:', error);
    return `${baseUrl}?ref=${referralCode}`;
  }
};

/**
 * Check if a referral code is valid format
 * @param code - The referral code to validate
 * @returns True if the code appears to be valid format
 */
export const isValidReferralCodeFormat = (code: string): boolean => {
  if (!code || typeof code !== 'string') {
    return false;
  }
  
  // Basic validation: should be alphanumeric and reasonable length
  const trimmed = code.trim();
  return /^[A-Z0-9]{6,12}$/i.test(trimmed);
};
