import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import GetMoreSlide from './components/GetMoreSlide';
import './App.css';
import BenefitSlide from './components/BenefitSlide';
import WhyChooseSlide from './components/WhyChooseSlide';
import PeopleSaySlide from './components/PeopleSaySlide';
import ChoosePlanSlide from './components/ChoosePlanSlide';
import Footer from './components/Footer';
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
import { setSelectedItem, setUser } from './redux/userSlice';
import ShippingBillingPage from './pages/ShippingBillingPage';

function App() {
  return (
    <div className="App text-dark-gray">
      <HeaderBar />
      <GetMoreSlide />
      <VideoPlayer videoUrl="https://www.youtube.com/embed/kS5mQJXCfPU" />
      <BenefitSlide />
      <WhyChooseSlide />
      <PeopleSaySlide />
      <ChoosePlanSlide />
      <Footer />
    </div>
  );
}

const AppWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedSelectedItem = localStorage.getItem('selectedItem');

    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }

    if (storedSelectedItem) {
      dispatch(setSelectedItem(storedSelectedItem));
    }

    // Set loading to false after processing local storage
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-black">
        <div>Loading...</div>
      </div>
    ); // Render a loading indicator or nothing
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
          <Route
            path="/accounts"
            element={<Navigate to="/accounts/overview" replace />}
          />
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
    </Router>
  );
};

export default AppWrapper;
