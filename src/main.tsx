import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Pages/Home.tsx";
import Layout from "./components/Header/Layout.tsx";
import PlaybackBar from "./components/Bars/PlayBackBar.tsx";
import PlaylistForm from "./components/Pages/PlayListForm.tsx";
import AudioContext, { SongContext } from "./contexts/AudioContext.tsx";
import "./main.css";

interface Playlist {
  title: string;
  description: string;
  imageUrl: string;
  priv: string;
}

function Main() {
  const songContext = useContext(SongContext);

  const [isPlaylistFormOpen, setisPlaylistFormOpen] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]); // Estado para las playlists

  const handleAddPlaylist = (
    title: string,
    description: string,
    imageUrl: string,
    priv: string
  ) => {
    setPlaylists([...playlists, { title, description, imageUrl, priv }]);
    setisPlaylistFormOpen(false); // Cerrar el formulario después de agregar la playlist
  };

  return (
    <React.StrictMode>
      <Layout
        onButtonClick={() => setisPlaylistFormOpen(true)}
        playlists={playlists}
      >
        {!isPlaylistFormOpen ? (
          <Home />
        ) : (
          <PlaylistForm
            onSubmit={(
              title: string,
              description: string,
              imageUrl: string,
              priv: string
            ) => handleAddPlaylist(title, description, imageUrl, priv)}
            onCancel={() => setisPlaylistFormOpen(false)}
          />
        )}
      </Layout>
      {songContext?.isPlaybackOpen && <PlaybackBar />}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AudioContext>
    <Main />
  </AudioContext>
);
