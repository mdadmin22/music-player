import React from 'react';
import SideBar from '../Bars/SideBar';
import Header from './Header';

<<<<<<< HEAD
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <SideBar userName={''} userImage={''} onButtonClick={null} />
        <main style={{ flex: 1, padding: '1rem' }}>
          {children}
        </main>
=======
interface Playlist {
  title: string;
  description: string;
  url: string;
}


interface LayoutProps {
  children: React.ReactNode;
  onButtonClick: () => void;
  playlists: Playlist[];
}

const Layout: React.FC<LayoutProps> = ({ children, onButtonClick, playlists }) => {
  return (
    <div className="layout">
      <Header />
      <SideBar 
        playlists={playlists}
        userName={''}
        userImage={'public/PERFIL.png'}
        onButtonClick={onButtonClick} // Pasa la función al SideBar
      />
      <div className="content">
        {children} {/* Aquí se renderizan los children si se pasan */}
>>>>>>> a91e3446b0302a1f50ca12fca1ae4781e89a2734
      </div>
    </div>
  );
};

export default Layout;
