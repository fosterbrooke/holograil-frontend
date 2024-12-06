import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import GetMoreSlide from './components/GetMoreSlide';
import BenefitSlide from './components/BenefitSlide';
import WhyChooseSlide from './components/WhyChooseSlide';
import PeopleSaySlide from './components/PeopleSaySlide';
import ChoosePlanSlide from './components/ChoosePlanSlide';
import VideoPlayer from './components/VideoPlayer';
import ScrollToTop from './components/ScrollToTop';
import HowItWorks from './pages/HowItWorks';
import CaseStudy from './pages/CaseStudy';
import Pricing from './pages/Pricing';
import Accessories from './pages/Accessories';
import React, { useEffect, useState } from 'react';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Accounts from './pages/Accounts';
import ProtectedRoute from './components/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import ShippingBillingPage from './pages/ShippingBillingPage';
import { initializeLocalStorage } from './utils/localStorageUtils';
import MainLayout from './layouts/MainLayout';
import { NotFoundWrapper } from './pages/NotFound';
import { updateHeaderVisibility } from './utils/headerUtils';
import { RootState } from './redux/store';
import { convertToSlug } from './utils/urlNormalization';

function App() {
  return (
    <div className="App text-dark-gray">
      <GetMoreSlide />
      <VideoPlayer videoUrl="https://www.youtube.com/embed/kS5mQJXCfPU" />
      <BenefitSlide />
      <WhyChooseSlide />
      <PeopleSaySlide />
      <ChoosePlanSlide />
    </div>
  );
}

const AppWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const selectedAccountsItem = useSelector(
    (state: RootState) => state.user.selectedAccountsItem
  );

  useEffect(() => {
    initializeLocalStorage(dispatch);
    setLoading(false);

    // Handling popstate events (history back forward events capture)
    const handlePopState = () =>
      updateHeaderVisibility(window.location.pathname, dispatch);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, dispatch]);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div>Loading...</div>
      </div>
    ); // Render a loading indicator or nothing
  }

  return (
    <MainLayout>
      <div className="overflow-hidden">
        <ScrollToTop />  
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route
            path="/accounts/*"
            element={
              <ProtectedRoute>
                <Accounts />
              </ProtectedRoute>
            }
          />
          {/* Redirecting /accounts to /accounts/overview */}
          <Route
            path="/accounts"
            element={
              selectedAccountsItem ? (
                <Navigate
                  to={`/accounts/${convertToSlug(selectedAccountsItem)}`}
                  replace
                />
              ) : (
                <Navigate to="/accounts/overview" replace />
              )
            }
          />
          <Route
            path="/shipping"
            element={
              <ProtectedRoute>
                <ShippingBillingPage />
              </ProtectedRoute>
            }
          />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/accessories" element={<Accessories />} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<Navigate to="/404" replace />} />
          {/* Redirect to /404 */}
          <Route path="/404" element={<NotFoundWrapper />} />
        </Routes>
      </div>
    </MainLayout>
  );
};

export default AppWrapper;
