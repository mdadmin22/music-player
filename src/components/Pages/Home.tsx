import FilterButton from "../Buttons/FilterButton";
import SongCard from "../Cards/SongCard";
import { data } from "../../data";
import AlbumCard from "../Cards/AlbumCard";
import styles from "./Home.module.css";
import PodcastList from "../Cards/PodcastList";
import { useContext } from "react";
import { SongContext } from "../../contexts/AudioContext";

function Home() {
  const songContext = useContext(SongContext);
  if (songContext?.isLoading) {
    return (
      <h2
        style={{
          display: "grid",
          placeContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        Cargando la página...
      </h2>
    );
  }

  if (songContext?.error) {
    return (
      <h2
        style={{
          display: "grid",
          placeContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        Hubo un error inesperado 🫤
      </h2>
    );
  }

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
          {songContext?.podcasts.map((podcast) => {
            return (
              <PodcastList
                key={podcast.id}
                id={podcast.id}
                title={podcast.title}
                description={podcast.description}
                channel={podcast.channel}
                urls={podcast.urls}
                handleClick={() => songContext.HandleCurrentSongSelect(podcast)}
                isPlaying={
                  songContext.currentSong?.id === podcast.id &&
                  songContext.isPlaying
                }
                isSelected={songContext.currentSong?.id === podcast.id}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default Home;
