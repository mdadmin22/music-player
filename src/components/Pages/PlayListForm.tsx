import React, { useState } from "react";
import styles from "./PlayListForm.module.css";

interface PlaylistFormProps {
  onSubmit: (title: string, description: string, imageUrl: string, genre: string) => void;
  onCancel: () => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = () => {
    onSubmit(title, description, imageUrl, genre);
  };

  return (
    <section id="formulario" className={styles.formulario_container}>
      <h2 className={styles.formulario_tituloh2}>Crear Nueva Playlist</h2>
      <label htmlFor="title" >
        Título:
      </label>
      <input className={styles.formulario_input}
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description" className="form-content">
        Descripción:
      </label>
      <input className={styles.formulario_input}
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="Imagen" className="form-content">
        ImageUrl:
      </label>
      <input className={styles.formulario_input}
        id="Imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
    <label htmlFor="genre" className="form-content">
        Privacidad:
      </label>
      <select
        className={styles.formulario_input}
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        
        <option value="publica">Pública</option>
        <option value="privada">Privada</option>
        <option value="oculta">Oculta</option>        
      </select>



      <div className={styles.button_container}>
        <button className={styles.formulario_boton} onClick={handleSubmit}>
        Crear
      </button>      
      
      <button className={styles.formulario_boton} onClick={onCancel}>
        Cancelar
      </button>
      </div>
    </section>
  );
};

export default PlaylistForm;
