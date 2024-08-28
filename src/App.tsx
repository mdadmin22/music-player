//import React from 'react';
//import FilterChips from './components/Bars/FilterChips';
//import Header from './components/Header/Header';
import SongCard from './components/Cards/SongCard';
import AlbumCard from './components/Cards/AlbumCard';
//import ArtistCard from './components/Cards/ArtistCard';
import PlaybackBar from './components/Bars/PlayBackBar';
import { data } from './data';
import './App.css';
//import Sidebar from './components/Bars/SideBar';
import FilterButton from './components/Buttons/FilterButton';
//import ArtistCard from './components/Cards/ArtistCard';
//import MenuBar from './components/Bars/MenuBar';
//import FrameCard from './components/Cards/FrameCard';
// src/index.js o src/App.js
//import MyComponent from './components/MyComponent/MyComponent';
//import Listado from './components/Cards/Listado';
//import ListenAgain from './components/Cards/ListenAgain';
//import Sidebar from './components/Bars/Sidebar';
//import ButtonWithImage from './components/Buttons/MenuButton';
import Layout from './components/Header/Layout';
function App() {

  return (
    <div className="app">
      
      <div> 
        <Layout children={undefined} />
        </div>
      
        <main>
        <section className='Filtros'>
        {data.FilterChips.map((filter) =>
          {
            return(
              <FilterButton key={filter.id} text= {filter.filter}/>
            )
          }
          )
          }  
          
        </section>
        <section className="section">
          <h1>Listen Again</h1>
          <div className="song-list">
            {data.song.map((song) => (
              <SongCard key={song.id} title={song.title} song={song} imageUrl={song.imageUrl} />

            ))}
          </div>
        </section>
        

        <section className="section">
          <h2>Start radio fromn a song</h2>
          <h1>Quick Picks</h1>

          <div className="song-list">
            {data.quickPicks.map((song) => (
              <SongCard key={song.id} song={song} imageUrl={song.imageUrl} title={''} />
            ))}
          </div>
        </section>

        <section className="section">
          <h1>Albums Recomendados</h1>
          <div className="album-list">
            {data.recommendedAlbums.map((song) => (
              <SongCard key={song.id} song={song} imageUrl={song.imageUrl} title={''} />
            ))}
          </div>
        </section>

        <section className="section">
          <h1>Similar to</h1>

          <div className="artist-list">
            {data.Album.map((artist) => (
              <AlbumCard key={artist.id} title={artist.name} artist={artist.artist} id={0} imageUrl={artist.imageUrl} name={artist.name} />
            ))}
          </div>
        </section>
        
      </main>
      
      <PlaybackBar />
    </div>
  );
}

export default App;
