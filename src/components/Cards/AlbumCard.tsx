import styles from "./AlbumCard.module.css";

type AlbumCardProps = {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  name: string;
  priv?: string;
};

function AlbumCard(album: AlbumCardProps) {
  return (
    <div className={styles.album_card}>
      <div className={styles.album_info}>
        {album.imageUrl && (
          <img
            src={album.imageUrl}
            alt="Album Imagen"
            className={styles.album_imagen}
          />
        )}
        <div className={styles.album_title}>{album.title}</div>
        <div className={styles.album_artist}>{album.artist}</div>
        <div className={styles.album_priv}>{album.priv}</div>
      </div>
    </div>
  );
}

export default AlbumCard;
