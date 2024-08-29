import React from 'react';
import './Layout.css';
import SideBar from '../Bars/SideBar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  onButtonClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onButtonClick }) => {
  return (
    <div className="layout">
      <Header />
      <SideBar
        userName={''}
        userImage={'public/PERFIL.png'}
        onButtonClick={onButtonClick} // Pasa la función al SideBar
      />
      <div className="content">
        {children} {/* Aquí se renderizan los children si se pasan */}
      </div>
    </div>
  );
};

export default Layout;
