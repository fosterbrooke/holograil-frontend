import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import React from 'react';

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
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* <Route path="/member-access" element={<MemberAccess />} /> */}
          {/* <Route path="/member-exclusive" element={<MemberExclusive />} /> */}
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppWrapper;
