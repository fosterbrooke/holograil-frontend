import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import GetMoreSlide from './components/GetMoreSlide';

function App() {
  return (
    <div className="">
      <HeaderBar />
      <GetMoreSlide />
    </div>
  );
}

const AppWrapper: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/member-access" element={<MemberAccess />} />
        <Route path="/member-exclusive" element={<MemberExclusive />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/success" element={<Success />} /> */}
      </Routes>
    </Router>
  );
};

export default AppWrapper;
