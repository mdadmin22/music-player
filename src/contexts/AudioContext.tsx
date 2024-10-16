import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import useFetchData, { Podcast } from "../customHooks/useFetchData";

//Esto es el contexto Global
interface SongTypes {
  podcasts: Podcast[];
  isLoading: boolean;
  error: string | null;
  currentSong: Podcast | null;
  setCurrentSong: React.Dispatch<React.SetStateAction<Podcast | null>>;
  isPlaying: boolean;
  handlePlayPause(): void;
  handleNextAudio(): void;
  handlePreviousAudio(): void;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  HandleCurrentSongSelect(song: Podcast): void;
  progressTime: number;
  elapsedTime: number;
  handleProgressChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handlePlayback(): void;
  isPlaybackOpen: boolean;
}

export const SongContext = createContext<SongTypes | undefined>(undefined);

//Estados que maneja el Provider para mi context
export default function AudioContext({ children }: { children: ReactNode }) {
  const { podcasts, isLoading, error } = useFetchData();
  const [currentSong, setCurrentSong] = useState<Podcast | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progressTime, setProgressTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isPlaybackOpen, setIsPlaybackOpen] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration > 0) {
        setProgressTime((audio.currentTime / audio.duration) * 100);
        setElapsedTime(audio.currentTime);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [currentSong]);

  //Funcion para abrir el Playback
  function handlePlayback() {
    setIsPlaybackOpen(false);
    audioRef.current?.pause();
    setCurrentSong(null);
    setProgressTime(0);
    setElapsedTime(0);
  }

  //Funcion para manejar la barra de progreso
  function handleProgressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newProgress = Number(event.target.value);
    setProgressTime(newProgress);

    if (audioRef.current) {
      audioRef.current.currentTime =
        (newProgress / 100) * audioRef.current.duration;
    }
  }

  //Funcion para ir a la siguiente canción
  function handleNextAudio() {
    setProgressTime(0);
    setElapsedTime(0);
    const index = podcasts.findIndex((object) => object.id === currentSong?.id);
    index < podcasts.length - 1
      ? HandleCurrentSongSelect(podcasts[index + 1])
      : HandleCurrentSongSelect(podcasts[0]);
  }

  //Funcion para ir a la cancion anterior
  function handlePreviousAudio() {
    setProgressTime(0);
    setElapsedTime(0);
    const index = podcasts.findIndex((object) => object.id === currentSong?.id);
    index === 0
      ? HandleCurrentSongSelect(podcasts[podcasts.length - 1])
      : HandleCurrentSongSelect(podcasts[index - 1]);
  }

  //Función para manejar el play y pausa
  function handlePlayPause() {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  //Funcion para establecer la canción actual
  function HandleCurrentSongSelect(song: Podcast) {
    if (currentSong?.id === song.id) {
      if (audioRef.current) {
        handlePlayPause();
      }
    } else {
      setProgressTime(0);
      setElapsedTime(0);
      setCurrentSong(song);
      setIsPlaybackOpen(true);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = song.urls.high_mp3;
        audioRef.current.play();
      }
    }
  }

  return (
    <SongContext.Provider
      value={{
        podcasts,
        isLoading,
        error,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        handlePlayPause,
        handleNextAudio,
        handlePreviousAudio,
        HandleCurrentSongSelect,
        progressTime,
        elapsedTime,
        handleProgressChange,
        handlePlayback,
        isPlaybackOpen,
      }}
    >
      {children}
      <audio src="" ref={audioRef} />
    </SongContext.Provider>
  );
}
