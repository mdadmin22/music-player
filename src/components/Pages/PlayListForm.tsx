import React, { useState } from "react";
import styles from "./PlayListForm.module.css";
import AlbumCard from "../Cards/AlbumCard";

interface PlaylistFormProps {
  onSubmit: (
    title: string,
    description: string,
    imageUrl: string,
    genre: string
  ) => void;
  onCancel: () => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [priv, setPriv] = useState("");

  const handleSubmit = () => {
    onSubmit(title, description, imageUrl, priv);
  };

  return (
    <section id="formulario" className={styles.formulario_container}>
  <div className={styles.form_section}> 
    {/* Añadí esta nueva clase para agrupar los inputs y evitar que interfieran con la vista previa */}
    
    <h2 className={styles.formulario_tituloh2}>Crear Nueva Playlist</h2>
    <label htmlFor="title">Título:</label>
    <input
      className={styles.formulario_input}
      id="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <label htmlFor="description" className="form-content">
      Descripción:
    </label>
    <input
      className={styles.formulario_input}
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <label htmlFor="Imagen" className="form-content">
      ImageUrl:
    </label>
    <input
      className={styles.formulario_input}
      id="Imagen"
      value={imageUrl}
      onChange={(e) => setImageUrl(e.target.value)}
    />
    <label htmlFor="privacy" className="form-content">
      Privacidad:
    </label>
    <select
      className={styles.formulario_input}
      id="privacy"
      value={priv}
      onChange={(e) => setPriv(e.target.value)}
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
  </div>

  <div className={styles.preview_container}>
    <AlbumCard
      id={1}
      title={description}
      artist={title}
      imageUrl={imageUrl}
      name={title}
    />
  </div>
</section>
  );
};

export default PlaylistForm;
