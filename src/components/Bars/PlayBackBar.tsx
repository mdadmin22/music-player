import { useContext } from "react";
import FrameCard from "../Cards/FrameCard";
import styles from "./PlayBackBar.module.css";
import { SongContext } from "../../contexts/AudioContext";
import ProgressBar from "./ProgessBar";

const PlaybackBar = () => {
  const songContext = useContext(SongContext);
  function convertAudioTime(time: number) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    } else {
      return `${minutes}:${String(seconds).padStart(2, "0")}`;
    }
  }

  return (
    <div className={styles.playBackBar_container}>
      <ProgressBar />
      <div className={styles.playback_controls}>
        <button onClick={songContext?.handlePreviousAudio}>
          <img src="public/skip_previous.svg" alt="Anterior" />
        </button>
        <button onClick={songContext?.handlePlayPause}>
          <img
            src={
              songContext?.isPlaying ? "Icons/pause_big.svg" : "/play_arrow.svg"
            }
            alt="Play"
          />
        </button>
        <button onClick={songContext?.handleNextAudio}>
          <img src="public/skip_next.svg" alt="Siguiente" />
        </button>
        <div className={styles.time_elapsedTime}>
          {songContext?.currentSong?.duration && (
            <p className={styles.media_time}>
              {convertAudioTime(songContext?.elapsedTime)} /{" "}
              {convertAudioTime(songContext?.currentSong.duration)}
            </p>
          )}
        </div>
      </div>
      <div className={styles.FrameCard}>
        <FrameCard
          title={songContext?.currentSong?.title.slice(0, 40) + "..."}
          imgrtist={songContext?.currentSong?.channel.urls.logo_image.original}
          artist={
            songContext?.currentSong?.description
              ? songContext?.currentSong?.description.slice(0, 40) + "..."
              : "Sin descripción..."
          }
        />
      </div>
      <button onClick={songContext?.handlePlayback}>⨉</button>
    </div>
  );
};

export default PlaybackBar;
