import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from './components/ui/toaster';
import { LanguageProvider } from './lib/LanguageContext';
import CookieConsent from './components/CookieConsent';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <Toaster />
      <CookieConsent />
    </LanguageProvider>
  );
}

export default App;
