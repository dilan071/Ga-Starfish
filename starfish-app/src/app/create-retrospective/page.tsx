'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateRetrospectivePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [fsh, setFsh] = useState('');
  const router = useRouter();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fsh) {
      alert('Debes seleccionar un FSH para analizar');
      return;
    }
    const retrospective = {
      title,
      description,
      fsh,
      createdAt: new Date(),
      actions: [],
      votes: {}  
    };
    localStorage.setItem('retrospective', JSON.stringify(retrospective));
    alert('Retrospectiva creada exitosamente');
    router.push('/retrospective-session');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Crear Retrospectiva (Scrum Master)</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Título:</label><br />
          <input 
            type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Descripción:</label><br />
          <textarea 
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Seleccionar FSH:</label><br />
          <select value={fsh} onChange={e => setFsh(e.target.value)} required>
            <option value="">-- Seleccione un FSH --</option>
            <option value="FSH1">FSH1</option>
            <option value="FSH2">FSH2</option>
            <option value="FSH3">FSH3</option>
          </select>
        </div>
        <button type="submit">Crear Retrospectiva</button>
      </form>
    </div>
  );
}
