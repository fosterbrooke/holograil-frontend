import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetMoreSlide from './components/GetMoreSlide';
import BenefitSlide from './components/BenefitSlide';
import WhyChooseSlide from './components/WhyChooseSlide';
import PeopleSaySlide from './components/PeopleSaySlide';
import ChoosePlanSlide from './components/ChoosePlanSlide';
import VideoPlayer from './components/VideoPlayer';
import HowItWorks from './pages/HowItWorks';
import CaseStudy from './pages/CaseStudy';
import Pricing from './pages/Pricing';
import Accessories from './pages/Accessories';
import React, { useEffect, useState } from 'react';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Accounts from './pages/Accounts';
import ProtectedRoute from './components/ProtectedRoute';
import { useDispatch } from 'react-redux';
import ShippingBillingPage from './pages/ShippingBillingPage';
import { initializeLocalStorage } from './utils/localStorageUtils';
import MainLayout from './layouts/MainLayout';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLocalStorage(dispatch);
    setLoading(false);
  }, [location.pathname, dispatch]);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div>Loading...</div>
      </div>
    ); // Render a loading indicator or nothing
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MainLayout>
        <div className="overflow-hidden">
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
            {/* <Route
            path="/accounts"
            element={<Navigate to="/accounts/overview" replace />}
          /> */}
            {/* <Route path="/member-access" element={<MemberAccess />} /> */}
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
          </Routes>
        </div>
      </MainLayout>
    </Router>
  );
};

export default AppWrapper;
