import React from 'react';
import SideBar from '../Bars/SideBar';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <SideBar userName={''} userImage={''} onButtonClick={null} />
        <main style={{ flex: 1, padding: '1rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
