import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Pages/Home.tsx';
import Layout from './components/Header/Layout.tsx';
import PlaybackBar from './components/Bars/PlayBackBar.tsx';
import PlaylistForm from './components/Pages/PlayListForm.tsx';

interface Playlist {
  title: string;
  description: string;
  url?: string; 
}
function Main() {
  const [isPlaylistFormOpen, setIsPlaylistFormOpen] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]) // Estado para las playlists

  const handleAddPlaylist = (title: string, description: string) => {
    setPlaylists([...playlists, { title, description }]); 
    setIsPlaylistFormOpen(false); // Cerrar el formulario después de agregar la playlist
  };
  
  return (
    <React.StrictMode>
      <Layout
       onButtonClick={() => setIsPlaylistFormOpen(true)} 
       playlists={playlists}>

        {!isPlaylistFormOpen ? (
          <Home />
        ) : (
          <PlaylistForm
            onSubmit={(title: string, description:string) => handleAddPlaylist(title, description)}
            onCancel={() => setIsPlaylistFormOpen(false)}
          />
        )}
      </Layout>
      <PlaybackBar />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
