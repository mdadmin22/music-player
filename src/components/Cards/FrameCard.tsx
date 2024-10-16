import styles from "./FrameCard.module.css";

interface Frame {
  title: string | undefined;
  artist: string | undefined;
  imgrtist: string | undefined;
}

const FrameCard: React.FC<Frame> = (song) => {
  return (
    <div className={styles.frame_card}>
      <div className={styles.frame_info}>
        <img src={song.imgrtist} className={styles.frame_img} />
        <div className={styles.text_description}>
          <p className="frame-title">{song.title}</p>
          <p className="frame-artist">{song.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameCard;
