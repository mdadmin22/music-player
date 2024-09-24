import { useState, useRef } from "react";
import styles from "../Cards/PodcasList.module.css";
import useFetchData from "../../customHooks/useFetchData";

interface Podcast {
  setCurrentPodcast: (podcast: Podcast | null) => void;
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
}


 
const PodcastList: React.FC<Podcast> = ({ setCurrentPodcast }) => {
 
  const [playingPodcast, setPlayingPodcast] = useState<number | null>(null);
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const { podcasts, isLoading, error } = useFetchData();
  

  const handlePlay = (index: number, podcast: Podcast) => {
    if (playingPodcast !== null && playingPodcast !== index) {
      audioRefs.current[playingPodcast]?.pause();
      audioRefs.current[playingPodcast].currentTime = 0;
    }

    if (playingPodcast === index) {
      audioRefs.current[index]?.pause();
      setCurrentPodcast(null);
      setPlayingPodcast(null);
    } else {
      audioRefs.current[index]?.play();
      setCurrentPodcast(podcast);
      setPlayingPodcast(index);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.podcastList}>
      {podcasts.map((podcast, index) => (
        <div key={podcast.id} className={styles.podcastItem}>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
          <div style={{ position: "relative" }}>
            <img
              src={podcast.channel.urls.logo_image.original}
              alt={podcast.title}
              className={styles.podcastImage}
              onClick={() => handlePlay(index, podcast)}
            />
            <img
              src={
                playingPodcast === index
                  ? "public/Icons/pause.svg"
                  : "public/Icons/play.svg"
              }
              alt={playingPodcast === index ? "Pause" : "Play"}
              className={styles.playPauseIcon}
            />
          </div>
          <audio
            ref={(el) => (audioRefs.current[index] = el!)}
            src={podcast.urls.high_mp3}
            preload="metadata"
          />
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
