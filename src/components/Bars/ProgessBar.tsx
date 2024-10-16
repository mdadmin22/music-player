import { useEffect, useRef } from "react";
import { SongContext } from "../../contexts/AudioContext";
import { useContext } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  const songContext = useContext(SongContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function updateProgressBar() {
      if (inputRef.current) {
        const value = Number(inputRef.current.value);
        const min = Number(inputRef.current.min);
        const max = Number(inputRef.current.max);
        const percent = ((value - min) / (max - min)) * 100;

        inputRef.current.style.background = `linear-gradient(to right, red ${percent}%, #555 ${percent}%)`;
      }
    }

    updateProgressBar();
  }, [songContext?.progressTime]);

  return (
    <div className={styles.progressBar_container}>
      <input
        className={styles.progressRange}
        onChange={songContext?.handleProgressChange}
        ref={inputRef}
        value={songContext?.progressTime}
        type="range"
        id="progressRange"
        min="0"
        max="100"
        step=".1"
      />
    </div>
  );
}
