// src/components/Layout.tsx

import React from 'react';
import './Layout.css';
import SideBar from '../Bars/SideBar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  onButtonClick: true;
}

const Layout: React.FC<LayoutProps> = ({ }) => {
  return (
    <div className="layout">
      
      <Header/>      
      <SideBar userName={''} userImage={'public/PERFIL.png'} onButtonClick={null}/>
            
    </div>
  );
};

export default Layout;
