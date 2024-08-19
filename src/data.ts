// src/data.ts 

interface FilterChips {
  id: number;
  filter: string;
  onButtonClick: string;
  }

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
    FilterChips: FilterChips[];
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
      { id: 4, title: "song 4", artist: "artista 4", imageUrl: "public/cuadropeque.svg" },
      { id: 5, title: "song 5", artist: "artista 5", imageUrl: "public/cuadropeque.svg" },
      { id: 6, title: "song 6", artist: "artista 6", imageUrl: "public/cuadropeque.svg" },
      { id: 7, title: "song 7", artist: "artista 7", imageUrl: "public/cuadropeque.svg" },
      { id: 8, title: "song 8", artist: "artista 8", imageUrl: "public/cuadropeque.svg" },
      { id: 9, title: "song 9", artist: "artista 9", imageUrl: "public/cuadropeque.svg" },
      { id: 10, title: "song 10", artist: "artista 10", imageUrl: "public/cuadropeque.svg" },
      { id: 11, title: "song 11", artist: "artista 11", imageUrl: "public/cuadropeque.svg" },
      { id: 12, title: "song 12", artist: "artista 12", imageUrl: "public/cuadropeque.svg" },
      { id: 13, title: "song 13", artist: "artista 13", imageUrl: "public/cuadropeque.svg" },
      { id: 14, title: "song 14", artist: "artista 14", imageUrl: "public/cuadropeque.svg" },
      { id: 15, title: "song 15", artist: "artista 15", imageUrl: "public/cuadropeque.svg" },
      { id: 16, title: "song 16", artist: "artista 16", imageUrl: "public/cuadropeque.svg" },
      { id: 17, title: "song 17", artist: "artista 17", imageUrl: "public/cuadropeque.svg" },
      { id: 18, title: "song 18", artist: "artista 18", imageUrl: "public/cuadropeque.svg" },
      { id: 19, title: "song 19", artist: "artista 19", imageUrl: "public/cuadropeque.svg" },
      { id: 20, title: "song 20", artist: "artista 20", imageUrl: "public/cuadropeque.svg" }      
      
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
    SideBarProps: [],


    FilterChips: [
      { id: 1, filter: 'Meditacion', onButtonClick: ""},
      { id: 2, filter: 'Relajacion', onButtonClick:"" },
      { id: 3, filter: 'Mantras', onButtonClick:"" },
      { id: 4, filter: 'Pop', onButtonClick: ""},
      { id: 5, filter: 'Rock', onButtonClick:"" },
      { id: 6, filter: 'Asadito', onButtonClick:"" },
    ]
  };
 
  interface SideBarProps {
    onButtonClick: () => void;
  }  