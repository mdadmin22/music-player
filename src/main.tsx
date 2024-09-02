import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Pages/Home.tsx';
import Layout from './components/Header/Layout.tsx';
import PlaybackBar from './components/Bars/PlayBackBar.tsx';
import PlaylistForm from './components/Pages/PlayListForm.tsx';
import "./main.css"

interface Playlist {
  title: string;
  description: string;
  imageUrl?: string; 
  genre: string;
}
function Main() {
  const [isPlaylistFormOpen, setisPlaylistFormOpen] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]) // Estado para las playlists

  const handleAddPlaylist = (title: string, description: string, imageUrl: string, genre: string ) => {
    setPlaylists([...playlists, { title, description, imageUrl, genre }]); 
    setisPlaylistFormOpen(false); // Cerrar el formulario después de agregar la playlist
  };
  
  return (
    <React.StrictMode>
      <Layout
       onButtonClick={() => setisPlaylistFormOpen(true)} 
       playlists={playlists}>

        {!isPlaylistFormOpen ? (
          <Home />
        ) : (
          <PlaylistForm
            onSubmit={(title: string, description:string, imageUrl:string, genre: string) => handleAddPlaylist(title, description, imageUrl, genre)}
            onCancel={() => setisPlaylistFormOpen(false)}
          />
        )}
      </Layout>
      <PlaybackBar />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
