import React from 'react';
import SongCard from './components/Cards/SongCard';
import AlbumCard from './components/Cards/AlbumCard';
import PlaybackBar from './components/Bars/PlayBackBar';
import { data } from './data';
import './App.css';
import FilterButton from './components/Buttons/FilterButton';
import Layout from './components/Header/Layout';

function App() {
  const handleNewPlaylistClick = () => {
    // Aquí iría la lógica para abrir el formulario de la nueva playlist
    console.log("Nueva Playlist Clicked");
  };

  return (
    <div className="app">
      <Layout onButtonClick={handleNewPlaylistClick}>
        <main>
          <section className="Filtros">
            {data.FilterChips.map((filter) => (
              <FilterButton key={filter.id} text={filter.filter} />
            ))}
          </section>

          <section className="section">
            <h1>Listen Again</h1>
            <div className="song-list">
              {data.song.map((song) => (
                <SongCard
                  key={song.id}
                  title={song.title}
                  song={song}
                  imageUrl={song.imageUrl}
                />
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Start radio from a song</h2>
            <h1>Quick Picks</h1>
            <div className="song-list">
              {data.quickPicks.map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  imageUrl={song.imageUrl}
                  title={''}
                />
              ))}
            </div>
          </section>

          <section className="section">
            <h1>Albums Recomendados</h1>
            <div className="album-list">
              {data.recommendedAlbums.map((album) => (
                <AlbumCard
                  key={album.id}
                  title={album.name}
                  artist={album.artist}
                  id={album.id}
                  imageUrl={album.imageUrl}
                  name={album.name}
                />
              ))}
            </div>
          </section>

          <section className="section">
            <h1>Similar to</h1>
            <div className="artist-list">
              {data.Album.map((artist) => (
                <AlbumCard
                  key={artist.id}
                  title={artist.name}
                  artist={artist.artist}
                  id={artist.id}
                  imageUrl={artist.imageUrl}
                  name={artist.name}
                />
              ))}
            </div>
          </section>
        </main>
      </Layout>

      <PlaybackBar />
    </div>
  );
}

export default App;
