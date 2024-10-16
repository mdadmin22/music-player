import styles from "../Cards/PodcasList.module.css";

type Podcast = {
  id: number;
  title: string;
  description: string;
  channel: {
    urls: {
      logo_image: {
        original: string;
      };
    };
    title: string;
  };
  urls: {
    high_mp3: string;
  };
  handleClick: () => void;
  isPlaying: boolean;
  isSelected: boolean;
};

const PodcastList = (props: Podcast) => {
  return (
    <div className={styles.podcastList} onClick={props.handleClick}>
      <div
        key={props.id}
        className={`${styles.podcastItem} ${
          props.isSelected && styles.isSelected
        }`}
      >
        <h2>{props.title.slice(0, 40) + "..."}</h2>
        <p>{props.description}</p>
        <div style={{ position: "relative" }}>
          <img
            src={props.channel.urls.logo_image.original}
            alt={props.title}
            className={styles.podcastImage}
          />
          <img
            src={!props.isPlaying ? "/Icons/play.svg" : "/Icons/pause.svg"}
            alt="Play/Pause"
            className={styles.playPauseIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
