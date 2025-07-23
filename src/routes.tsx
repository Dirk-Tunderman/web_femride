import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Impressum from './pages/Impressum';
import RidePage from './pages/RidePage';
import DrivePage from './pages/DrivePage';
import FleetPage from './pages/FleetPage';
import PassengerFAQ from './pages/PassengerFAQ';
import DriverFAQ from './pages/DriverFAQ';
import FleetFAQ from './pages/FleetFAQ';
import DeletePassengerAccount from "./pages/DeletePassengerAccount";
import DeleteDriverAccount from "./pages/DeleteDriverAccount";
import Admin from './pages/Admin';
import VerifyEmail from './pages/VerifyEmail';

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
    path: '/impressum',
    element: <Impressum />,
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
    path: '/delete-passenger-account',
    element: <DeletePassengerAccount />,
  },
  {
    path: '/delete-driver-account',
    element: <DeleteDriverAccount />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/verify-email',
    element: <VerifyEmail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
