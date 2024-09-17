// src/components/PodcastList.tsx
import { useState, useEffect } from 'react';
import styles from '../Cards/PodcasList.module.css'


// Definimos el componente PodcastList
const PodcastList = () => {
  // Estado para almacenar la lista de podcasts
  const [podcasts, setPodcasts] = useState<any[]>([]);
  
  // Estado para manejar si los datos están siendo cargados
  const [isLoading, setIsLoading] = useState(true);
  
  // Estado para manejar posibles errores en la solicitud
  const [error, setError] = useState<string | null>(null);

  // Hook useEffect para realizar el fetch de la API cuando el componente se monte
  useEffect(() => {
    // Función asíncrona que realizará la solicitud a la API
    const fetchPodcasts = async () => {
      try {
        // Realizamos la solicitud a la API de AudioBoom
        const response = await fetch("https://api.audioboom.com/audio_clips");
        const data = await response.json(); // Parseamos la respuesta en formato JSON

        // Guardamos los podcasts obtenidos en el estado
        setPodcasts(data.body.audio_clips); 

        // Una vez cargados los datos, marcamos que ya no estamos cargando
        setIsLoading(false);
      } catch (error) {
        // Si ocurre un error, lo capturamos y lo guardamos en el estado
        setError("Failed to fetch podcasts");
        
        // Indicamos que terminó la carga, aunque haya fallado
        setIsLoading(false);
      }
    };

    // Llamamos a la función para obtener los podcasts
    fetchPodcasts();
  }, []); // El array vacío como segundo argumento asegura que esto solo ocurra una vez al montar el componente

  // Si los datos están cargándose, mostramos un mensaje de "Loading..."
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Si ocurrió un error, lo mostramos al usuario
  if (error) {
    return <p>{error}</p>;
  }

  // Si no hay podcasts disponibles, mostramos un mensaje indicando que no hay resultados
  if (!podcasts || podcasts.length === 0) {
    return <p>No podcasts available</p>;
  }

  // Renderizamos la lista de podcasts obtenida
  return (
    <div className={styles.podcastList}>
      {podcasts.map((podcast) => (
        <div key={podcast.id} className={styles.podcastItem}>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
          <img
            src={podcast.channel.urls.logo_image.original}
            alt={podcast.title}
            className={styles.podcastImage} // Aplicamos la clase de CSS
          />
          <audio controls>
            <source src={podcast.urls.high_mp3} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default PodcastList;