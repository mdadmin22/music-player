// src/data.ts 

interface Song {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
  }
  
  interface Album {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
    name: string;
  }
  
  interface Artist {
    id: number;
    name: string;
    artist: string;
    imageUrl: string;
  }

  
  interface Data {
    [x: string]: unknown;
    listenAgain: Song[];
    quickPicks: Song[];
    recommendedAlbums: Album[];
    similarArtists: Artist[];
    song: Song[]; 
    Album: Album[]; 
    SideBarProps: SideBarProps[]; 
  }
  
  export const data: Data = {
    listenAgain: [
      { id: 1, title: "Thriller", artist: "Michael Jackson", imageUrl: 'public/smoothcriminal.png' },
      { id: 2, title: "Billie Jean", artist: "Michael Jackson", imageUrl: 'public/billieJean.png' },
    ],
    quickPicks: [
      { id: 1, title: "song 1", artist: "artista 1", imageUrl: "public/cuadropeque.svg" },
      { id: 2, title: "song 2", artist: "artista 2", imageUrl: "public/cuadropeque.svg" },
      { id: 3, title: "song 3", artist: "artista 3", imageUrl: "public/cuadropeque.svg" },
      { id: 4, title: "song 4", artist: "artista 4", imageUrl: "public/cuadropeque.svg" }
    ],
    recommendedAlbums: [
      { id: 4, title: "Billie Jean", name: "Mj", artist: "Michael Jackson", imageUrl: "public/smoothcriminal.png" },
      { id: 7, title: "Billie Jean", name: "MMJJ", artist: "Michael Jackson", imageUrl: "public/smoothcriminal.png" },
    ],
    similarArtists: [
      { id: 1, name: "Un artista Similar 1", artist: "Nuevo Artista Similar1", imageUrl: "-" },
      { id: 2, name: "Un artista similar 2", artist: "Nuevo Artista Similar2", imageUrl: "public/smoothcriminal.png" },
    ],
    song: [
      { id: 1, title: "Escuchar 1", artist: "Artista 1", imageUrl: "public/Songs/Rectangle 1.svg" },
      { id: 2, title: "Escuchar 2", artist: "Artista 2", imageUrl: "public/Songs/Rectangle 1.svg" }
    ],
    Album: [
      { id: 1, title: "Titulo 1", artist: "Artista 1", imageUrl: "public/similar_to.svg", name: "Art.1" },
      { id: 2, title: "Titulo 2", artist: "Artista 2", imageUrl: "public/similar_to.svg", name: "Art.2" },
      { id: 3, title: "Titulo 3", artist: "Artista 3", imageUrl: "public/similar_to.svg", name: "Art.3" },
      { id: 4, title: "Titulo 4", artist: "Artista 4", imageUrl: "public/similar_to.svg", name: "Art.4" },
      { id: 5, title: "Titulo 5", artist: "Artista 5", imageUrl: "public/similar_to.svg", name: "Art.5" }
    ],
    SideBarProps: []
  };
 
  interface SideBarProps {
    onButtonClick: () => void;
  }  