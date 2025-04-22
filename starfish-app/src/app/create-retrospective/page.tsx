'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addDays, addWeeks, addMonths, formatISO } from 'date-fns';

export default function CreateRetrospectivePage() {
  const [mode, setMode] = useState<'create' | 'schedule'>('create');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fsh, setFsh] = useState('');
  const [start, setStart] = useState('');
  const [recurrence, setRecurrence] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [count, setCount] = useState(1);
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
      createdAt: new Date().toISOString(),
      actions: [],
      votes: {}
    };

    localStorage.setItem('retrospective', JSON.stringify(retrospective));
    alert('Retrospectiva creada exitosamente');
    router.push('/retrospective-session');
  };

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !fsh || !start) {
      alert('Completa título, FSH y fecha de inicio');
      return;
    }

    const occurrences: any[] = [];
    let date = new Date(start);

    for (let i = 0; i < count; i++) {
      occurrences.push({
        title,
        description,
        fsh,
        scheduledAt: formatISO(date),
        enabled: false,
        actions: [],
        votes: {}
      });

      if (recurrence === 'daily') date = addDays(date, 1);
      else if (recurrence === 'weekly') date = addWeeks(date, 1);
      else date = addMonths(date, 1);
    }

    const prev = JSON.parse(localStorage.getItem('scheduledRetrospectives') || '[]');
    localStorage.setItem('scheduledRetrospectives', JSON.stringify([...prev, ...occurrences]));
    alert('Retrospectivas programadas exitosamente');
    router.push('/dashboard');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{mode === 'create' ? 'Crear Retrospectiva (Scrum Master)' : 'Programar Retrospectivas Recurrentes'}</h2>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setMode('create')} disabled={mode === 'create'}>
          Crear única
        </button>{' '}
        <button onClick={() => setMode('schedule')} disabled={mode === 'schedule'}>
          Programar recurrente
        </button>
      </div>

      <form onSubmit={mode === 'create' ? handleCreate : handleSchedule}>
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
            <option value="">Ninguno</option>
            <option value="Comunicación">Comunicación</option>
            <option value="Compromiso">Compromiso</option>
            <option value="Colaboración">Colaboración</option>
            <option value="Motivación">Motivación</option>
            <option value="Satisfacción laboral">Satisfacción laboral</option>
            <option value="Inteligencia emocional">Inteligencia emocional</option>
            <option value="Cohesión de equipo">Cohesión de equipo</option>
            <option value="Empatía y relaciones">Empatía y relaciones</option>
            <option value="Liderazgo">Liderazgo</option>
            <option value="Autonomía">Autonomía</option>
            <option value="Innovación">Innovación</option>
            <option value="Habilidades y experiencia en el desarrollo de software">Habilidades y experiencia en el desarrollo de software</option>
            <option value="Habilidades y experiencia en la gestión de proyectos de desarrollo de software">Habilidades y experiencia en la gestión de proyectos de desarrollo de software</option>
          </select>
        </div>

        {mode === 'schedule' && (
          <>
            <div>
              <label>Fecha y hora de inicio:</label><br />
              <input 
                type="datetime-local" 
                value={start}
                onChange={e => setStart(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Periodicidad:</label><br />
              <select value={recurrence} onChange={e => setRecurrence(e.target.value as any)}>
                <option value="daily">Diaria</option>
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensual</option>
              </select>
            </div>
            <div>
              <label>Número de ocurrencias:</label><br />
              <input 
                type="number" 
                min={1} 
                max={12} 
                value={count}
                onChange={e => setCount(parseInt(e.target.value) || 1)} 
                required
              />
            </div>
          </>
        )}

        <button type="submit">
          {mode === 'create' ? 'Crear Retrospectiva' : 'Programar'}
        </button>
      </form>
    </div>
  );
}
