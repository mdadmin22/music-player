import FrameCard from "../Cards/FrameCard";
import styles from "./PlayBackBar.module.css";

interface PlaybackBarProps {
  currentPodcast: {
    title: string;
    channel: {
      title: string;
      urls: {
        logo_image: {
          original: string;
        };
      };
    };
  } | null;
}

const PlaybackBar: React.FC<PlaybackBarProps> = ({ currentPodcast }) => {
  return (
    <div className={styles.playBackBar_container}>
      <div className={styles.playback_controls}>
        <button>
          <img src="public/skip_previous.svg" alt="Anterior" />
        </button>
        <button>
          <img src="public/play_arrow.svg" alt="Play" />
        </button>
        <button>
          <img src="public/skip_next.svg" alt="Siguiente" />
        </button>
      </div>
      <div className={styles.FrameCard}>
        {currentPodcast ? (
          <FrameCard
            title={currentPodcast.title}
            imgrtist={currentPodcast.channel.urls.logo_image.original}
            artist={currentPodcast.channel.title}
            time={"0:00/0:00"} // Cambiar para mostrar el tiempo 
          />
        ) : (
          <p>No podcast playing</p>
        )}
      </div>
    </div>
  );
};

export default PlaybackBar;
