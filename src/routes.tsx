import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RidePage from './pages/RidePage';
import DrivePage from './pages/DrivePage';
import FleetPage from './pages/FleetPage';
import PassengerFAQ from './pages/PassengerFAQ';
import DriverFAQ from './pages/DriverFAQ';
import FleetFAQ from './pages/FleetFAQ';

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
    path: '/faq/passengers',
    element: <PassengerFAQ />,
  },
  {
    path: '/faq/drivers',
    element: <DriverFAQ />,
  },
  {
    path: '/faq/fleet',
    element: <FleetFAQ />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
