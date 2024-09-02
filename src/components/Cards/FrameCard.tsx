import styles from "./FrameCard.module.css";

interface Frame {
  time: string;
  title: string;
  artist: string;
  imgrtist: string;
}

const FrameCard: React.FC<Frame> = (song) => {
  return (
    <div className={styles.frame_card}>
      <div className={styles.frame_info}>
        <p className="frame-title">{song.title}</p>
        <p className="frame-artist">{song.artist}</p>
        <p className="id-artist">{song.time}</p>
        <img src={song.imgrtist} className={styles.frame_img} />
      </div>
    </div>
  );
};

export default FrameCard;
