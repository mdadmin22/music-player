import styles from "./Sidebar.module.css";

interface Playlist {
  title: string;
  description: string;
  imageUrl: string;
}

interface SideBarProps {
  userName: string;
  userImage: string;
  onButtonClick: () => void;
  playlists: Playlist[];
}

const SideBar: React.FC<SideBarProps> = ({
  playlists: Playlist,
  onButtonClick,
}) => {
  return (
    <div className={styles.sidebar}>
      {/* Información del usuario, otros botones, etc. */}
      <button onClick={onButtonClick}>+ Nueva Playlist</button>
      <ul>
        {Playlist.map((playlist, index) => (
          <li key={index} className={styles.itemlist_container}>
            <img
              src={playlist.imageUrl}
              alt="imagen de lista"
              className={styles.imagen_container}
            />
            <div>
            <h4>{playlist.title}</h4>
            <p>{playlist.description}</p>
            </div>
          </li>          
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
