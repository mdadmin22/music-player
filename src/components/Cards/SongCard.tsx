

interface Song {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}

interface SongCardProps {
  song: Song;
  imageUrl: string;
  title?: string;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="song-card">
      <div className="song-info">
        <p className="song-artist">{song.artist}</p>
        <p>
        <img src={song.imageUrl} alt="imagen" />
        </p>
      </div>
    </div>
  );
};

export default SongCard;
