

type AlbumCardProps = {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  name: string;
}


function AlbumCard (album: AlbumCardProps)  {
  return (
    <div className="album-card">
      <div className="album-info">
        <div className="album-title">{album.title}</div>
        <div className="album-artist">{album.artist}</div>
        
        <img src={album.imageUrl} alt="Album Imagen" /> {/*preguntar ref al profe*/ }
        
      </div>
    </div>
  );
}

export default AlbumCard;
