
import FilterButton from '../Buttons/FilterButton';
import Layout from '../Header/Layout';
import SongCard from '../Cards/SongCard';
import { data } from '../../data';
import AlbumCard from '../Cards/AlbumCard';
import PlaybackBar from '../Bars/PlayBackBar';
import '../../App.css';

function Home() {
   

  return (
    <div className="app">
      
      <div> 
        
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
      
      
    </div>
  );
}

export default Home;
