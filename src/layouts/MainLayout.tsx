import React from 'react';
import '../App.css';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const headerVisible = useSelector(
    (state: RootState) => state.user.headerVisible
  );

  return (
    <div className="App text-dark-gray">
      {headerVisible && <HeaderBar />}
      {children}
      {headerVisible && <Footer />}
    </div>
  );
};

export default MainLayout;
