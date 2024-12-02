// import { useNavigate } from 'react-router-dom'
import React from 'react';
import ChooseUsSlide from '../components/how-it-works/ChooseUsSlide';
import HowMainSlide from '../components/how-it-works/HowMainSlide';
import SimplicitySlide from '../components/how-it-works/SimplicitySlide';
import VideoPlayer from '../components/VideoPlayer';

const HowItWorks: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <div className="text-dark-gray">
      <HowMainSlide />
      <SimplicitySlide />
      <VideoPlayer videoUrl="https://www.youtube.com/embed/kS5mQJXCfPU" />
      <ChooseUsSlide />
    </div>
  );
};

export default HowItWorks;
