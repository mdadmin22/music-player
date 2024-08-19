import React from 'react';
import './MenuButton.css'; // Archivo CSS para estilos
//import menuImage from "src/assets/menu.png"

interface ButtonWithImageProps {
  onClick: () => void;
  altText?: string;
}

const ButtonWithImage: React.FC<ButtonWithImageProps> = ({ onClick, altText = 'Button image' }) => {
  return (
    <button className="button-with-image" onClick={onClick}>
      <img src="src/assets/menu.png" alt={altText} className="button-image" />
    </button>
  );
};

export default ButtonWithImage;


