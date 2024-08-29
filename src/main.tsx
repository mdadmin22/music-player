import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Pages/Home.tsx'
import Layout from './components/Header/Layout.tsx'
import PlaybackBar from './components/Bars/PlayBackBar.tsx'
import PlaylistForm from './components/Pages/PlayListForm.tsx'

function Main() {
  const [isPlaylistFormOpen, setisPlaylistFormOpen] = useState(false);

  return (
    <React.StrictMode>
      <Layout onButtonClick={() => setisPlaylistFormOpen(true)}>
        {!isPlaylistFormOpen ? (
          <Home />
        ) : (
          <PlaylistForm
            onSubmit={(title: string, description: string, privacy: string) => {
              // Aquí puedes manejar el submit del formulario
              console.log('Formulario enviado:', title, description, privacy);
              setisPlaylistFormOpen(false); // Cierra el formulario después del submit
            }}
            onCancel={() => setisPlaylistFormOpen(false)} // Cierra el formulario al cancelar
          />
        )}
      </Layout>
      <PlaybackBar />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);