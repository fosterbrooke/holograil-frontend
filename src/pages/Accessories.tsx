import React from 'react';
import AccessoriesMainSlide from '../components/accessories/AccessoriesMainSlide';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';

const Accessories:React.FC = () => {
  return (
    <div>
      <HeaderBar />
      <AccessoriesMainSlide />
      <Footer />
    </div>
  );
};

export default Accessories;
