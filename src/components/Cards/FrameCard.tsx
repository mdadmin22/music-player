// src/components/Cards/FrameCard.tsx

interface FrameCardProps {
  title: string;
  imgrtist: string; // Asegúrate de que esto se refiere a la imagen correcta
  artist: string;
  time: string; // Puedes cambiarlo a otro tipo si lo deseas
}

const FrameCard: React.FC<FrameCardProps> = ({ title, imgrtist, artist, time }) => {
  return (
    <div>
      <img src={imgrtist} alt={artist} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{time}</p>
    </div>
  );
};

export default FrameCard;
