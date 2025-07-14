// Google Analytics 4 utility functions for FemRide
// Tracking SEO performance, conversions, and user interactions
// Privacy-compliant implementation that respects user consent

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

// Check if user has consented to cookies/tracking
export const hasTrackingConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('femrideCookieConsent') === 'true';
};

// Check if Google Analytics is loaded
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Load Google Analytics dynamically after user consent
export const loadGoogleAnalytics = (): void => {
  if (typeof window === 'undefined' || !hasTrackingConsent()) return;

  // Check if already loaded
  if (isGALoaded()) return;

  // Create and load the gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EZZ2025DS8';
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Configure Google Analytics
  script.onload = () => {
    window.gtag('js', new Date());
    window.gtag('config', 'G-EZZ2025DS8', {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
      anonymize_ip: true, // Additional privacy protection
      allow_google_signals: false, // Disable advertising features
      allow_ad_personalization_signals: false // Disable ad personalization
    });
  };
};

// Track page views (automatically handled by GA4, but useful for SPA routing)
export const trackPageView = (page_title: string, page_location: string) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('config', 'G-EZZ2025DS8', {
    page_title,
    page_location,
    send_page_view: true
  });
};

// Track waitlist signups (critical conversion event)
export const trackWaitlistSignup = (userType: 'passenger' | 'driver' | 'both', email?: string) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'waitlist_signup', {
    event_category: 'conversion',
    event_label: userType,
    value: 1,
    custom_parameters: {
      user_type: userType,
      signup_source: 'website'
    }
  });

  // Track as conversion for SEO performance monitoring
  window.gtag('event', 'conversion', {
    send_to: 'G-EZZ2025DS8',
    event_category: 'waitlist',
    event_label: userType
  });
};

// Track referral code usage (for viral growth tracking)
export const trackReferralUsage = (referralCode: string) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'referral_used', {
    event_category: 'engagement',
    event_label: 'referral_code',
    custom_parameters: {
      referral_code: referralCode
    }
  });
};

// Track social media sharing (SEO and viral growth)
export const trackSocialShare = (platform: string, content_type: string = 'website') => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'share', {
    method: platform,
    content_type: content_type,
    item_id: 'femride_website'
  });
};

// Track language switching (for international SEO insights)
export const trackLanguageSwitch = (from_language: string, to_language: string) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'language_switch', {
    event_category: 'user_preference',
    event_label: `${from_language}_to_${to_language}`,
    custom_parameters: {
      from_language,
      to_language
    }
  });
};

// Track scroll depth (engagement metric for SEO)
export const trackScrollDepth = (percentage: number) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  // Only track at 25%, 50%, 75%, 100% to avoid spam
  if ([25, 50, 75, 100].includes(percentage)) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage
    });
  }
};

// Track form interactions (for conversion funnel analysis)
export const trackFormInteraction = (form_name: string, action: 'start' | 'complete' | 'abandon') => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', `form_${action}`, {
    event_category: 'form_interaction',
    event_label: form_name,
    custom_parameters: {
      form_name,
      action
    }
  });
};

// Track navigation clicks (for user journey analysis)
export const trackNavigation = (destination: string, source: string = 'main_nav') => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'navigation_click', {
    event_category: 'navigation',
    event_label: destination,
    custom_parameters: {
      destination,
      source
    }
  });
};

// Track search queries (if search functionality is added)
export const trackSearch = (search_term: string, results_count?: number) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'search', {
    search_term,
    event_category: 'search',
    custom_parameters: {
      results_count: results_count || 0
    }
  });
};

// Track file downloads (for resource tracking)
export const trackDownload = (file_name: string, file_type: string) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'file_download', {
    event_category: 'download',
    event_label: file_name,
    custom_parameters: {
      file_name,
      file_type
    }
  });
};

// Track external link clicks (for SEO and partnership analysis)
export const trackExternalLink = (url: string, link_text?: string) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'click', {
    event_category: 'external_link',
    event_label: url,
    custom_parameters: {
      link_url: url,
      link_text: link_text || 'unknown'
    }
  });
};

// Track video interactions (if video content is added)
export const trackVideoInteraction = (video_title: string, action: 'play' | 'pause' | 'complete', progress?: number) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', `video_${action}`, {
    event_category: 'video',
    event_label: video_title,
    value: progress || 0,
    custom_parameters: {
      video_title,
      action,
      progress: progress || 0
    }
  });
};

// Track custom events for A/B testing or feature usage
export const trackCustomEvent = (event_name: string, parameters: Record<string, any> = {}) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', event_name, {
    event_category: 'custom',
    ...parameters
  });
};

// Enhanced ecommerce tracking (for future premium features)
export const trackPurchase = (transaction_id: string, value: number, currency: string = 'EUR', items: any[] = []) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'purchase', {
    transaction_id,
    value,
    currency,
    items
  });
};

// Track user engagement time (for SEO ranking factors)
export const trackEngagementTime = (engagement_time_msec: number) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', 'user_engagement', {
    engagement_time_msec,
    event_category: 'engagement'
  });
};

// Utility function to track Core Web Vitals (for SEO performance)
export const trackWebVitals = (metric: { name: string; value: number; id: string }) => {
  if (!hasTrackingConsent() || !isGALoaded()) return;

  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true
  });
};

// Debug function to check if tracking is working
export const debugAnalytics = () => {
  if (typeof window !== 'undefined') {
    console.log('Google Analytics Status:', {
      isLoaded: isGALoaded(),
      dataLayer: window.dataLayer?.length || 0,
      gtag: typeof window.gtag
    });
  }
};

export default {
  trackPageView,
  trackWaitlistSignup,
  trackReferralUsage,
  trackSocialShare,
  trackLanguageSwitch,
  trackScrollDepth,
  trackFormInteraction,
  trackNavigation,
  trackSearch,
  trackDownload,
  trackExternalLink,
  trackVideoInteraction,
  trackCustomEvent,
  trackPurchase,
  trackEngagementTime,
  trackWebVitals,
  debugAnalytics,
  isGALoaded,
  hasTrackingConsent,
  loadGoogleAnalytics
};
