import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RidePage from './pages/RidePage';
import DrivePage from './pages/DrivePage';
import FleetPage from './pages/FleetPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/ride',
    element: <RidePage />,
  },
  {
    path: '/drive',
    element: <DrivePage />,
  },
  {
    path: '/fleet',
    element: <FleetPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/terms-conditions',
    element: <TermsConditions />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
