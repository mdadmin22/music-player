import { useState } from "react";
import FilterButton from "../Buttons/FilterButton";
import SongCard from "../Cards/SongCard";
import { data } from "../../data";
import AlbumCard from "../Cards/AlbumCard";
import styles from "./Home.module.css"
import PodcastList from "../Cards/PodcastList";
import PlaybackBar from "../Bars/PlayBackBar";




function Home() {
  const [currentPodcast, setCurrentPodcast] = useState<any | null>(null); 

  return (
    <div className={styles.app}>
      
      <main>
        <section className={styles.filtros}>
          {data.FilterChips.map((filter) => {
            return <FilterButton key={filter.id} text={filter.filter} />;
          })}
        </section>
        <section className={styles.section_listenAgain}>
          <h2>Listen Again</h2>
          <div className={styles.section_listenAgain_songList}>
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

        <section className={styles.section_quickPics}>
          <h3>Start radio fromn a song</h3>
          <h2>Quick Picks</h2>

          <div className={styles.section_quickPics_songList}>
            {data.quickPicks.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                imageUrl={song.imageUrl}
                title={""}
              />
            ))}
          </div>
        </section>

        <section className={styles.section_albumsRecomendados}>
          <h2>Albums Recomendados</h2>
          <div className={styles.section_albumsRecomendados_albumList}>
            {data.recommendedAlbums.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                imageUrl={song.imageUrl}
                title={""}
              />
            ))}
          </div>
        </section>

        <section className={styles.section_similarTo}>
          <h2>Similar to</h2>

          <div className={styles.section_similarTo_albumList}>
            {data.Album.map((artist) => (
              <AlbumCard
                key={artist.id}
                title={artist.name}
                artist={artist.artist}
                id={0}
                imageUrl={artist.imageUrl}
                name={artist.name}
              />
            ))}
          </div>          
        </section>
        <section>
          <h1>Lista de podcast fetch...</h1>
          <PodcastList setCurrentPodcast={setCurrentPodcast} id={0} title={""} description={""} channel={{
            urls: {
              logo_image: {
                original: ""
              }
            },
            title: ""
          }} urls={{
            high_mp3: ""
          }}/>
          
        </section>
      </main>
      
    </div>
  );
}

export default Home;
