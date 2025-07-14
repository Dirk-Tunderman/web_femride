import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from './components/ui/toaster';
import { LanguageProvider } from './lib/LanguageContext';
import CookieConsent from './components/CookieConsent';
import DebugPanel from './components/DebugPanel';
import { useEffect } from 'react';
import { loadGoogleAnalytics, hasTrackingConsent } from './lib/analytics';

import './App.css';

function App() {
  // Load Google Analytics if user previously consented
  useEffect(() => {
    if (hasTrackingConsent()) {
      loadGoogleAnalytics();
    }
  }, []);

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <Toaster />
      <CookieConsent />
      <DebugPanel />
    </LanguageProvider>
  );
}

export default App;
