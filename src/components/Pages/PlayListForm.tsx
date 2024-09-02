import React, { useState } from 'react';

interface PlaylistFormProps {
  onSubmit: (title: string, description: string, privacy: string) => void;
  onCancel: () => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('public');

  const handleSubmit = () => {
    onSubmit(title, description, privacy);
  };

  return (
    <div>
      <h2>Crear Nueva Playlist</h2>
      <label>
        Título:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Descripción:
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Privacidad:
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="public">Pública</option>
          <option value="private">Privada</option>
        </select>
      </label>
      <button onClick={handleSubmit}>Crear</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default PlaylistForm;

/*hola*/
