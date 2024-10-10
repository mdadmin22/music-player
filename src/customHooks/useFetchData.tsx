import { useEffect, useState } from "react";

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
  
   
  function useFetchData () {
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
  
    useEffect(() => {
      const fetchPodcasts = async () => {
        try {
          const response = await fetch("https://api.audioboom.com/audio_clips");
          const data = await response.json();
          setPodcasts(data.body.audio_clips);
          setIsLoading(false);
        } catch (error) {
          setError("Failed to fetch podcasts");
          setIsLoading(false);
        }
      };
  
      fetchPodcasts();
    }, []);
    return {
        podcasts,
        isLoading,
        error,
    }
  }
    export default useFetchData;