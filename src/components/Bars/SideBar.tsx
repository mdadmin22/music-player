// src/components/Sidebar.tsx

import React from 'react';
import './Sidebar.css';

type Props = {
  userName: string;
  userImage: string; 
  onButtonClick: null; //esta prop no va**
};

const Sidebar: React.FC<Props> = ({ userName, userImage, onButtonClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <button>{onButtonClick}</button>
        <img src={userImage} alt={`${userName} profile`} className="sidebar-profile-image" />
        <p>{userName}</p>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#listen-again">Escuchar de Nuevo</a></li>
        <li><a href="#suggested">Sugeridos</a></li>
        <li><a href="#recommended">Recomendados</a></li>
        <li><a href="#similar">Similares</a></li>
        <button>{onButtonClick} + Nueva PlayList</button>
        
      </ul>
      
    </div>
  );
}

export default Sidebar;

