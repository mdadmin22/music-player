import FrameCard from "../Cards/FrameCard";
import styles from "./PlayBackBar.module.css";

const PlaybackBar: React.FC = () => {
  return (
    <div className={styles.playBackBar_container}>
      <div className={styles.playback_controls}>
        <button>
          <img src="public\skip_previous.svg" alt="proximo" />
        </button>
        <button>
          <img src="public\play_arrow.svg" alt="play" />
        </button>
        <button>
          <img src="public\skip_next.svg" alt="proximo" />
        </button>
      </div>
      <div className={styles.FrameCard}>
        <FrameCard
          title="Artista 1"
          imgrtist="public\Rectangle 2.png"
          artist="ART"
          time={"0:15/3:10"}
        />
      </div>
    </div>
  );
};

export default PlaybackBar;
