// Dentro de tu componente SideBar
import React from 'react';

interface SideBarProps {
  userName: string;
  userImage: string;
  onButtonClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onButtonClick }) => {
  return (
    <div className="sidebar">
      {/* Información del usuario, otros botones, etc. */}
      <button onClick={onButtonClick}>+Nueva Playlist</button>
    </div>
  );
};

export default SideBar;
