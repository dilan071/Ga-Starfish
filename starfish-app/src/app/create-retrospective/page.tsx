'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addDays, addWeeks, addMonths, formatISO } from 'date-fns';

type Occurrence = {
  id: string;
  title: string;
  description: string;
  fsh: string;
  scheduledAt?: string;
  createdAt: string;
  createdBy: string;
  assignedGroup: string;
  actions: any[];
  votes: Record<string, string>;
  closed: boolean;
};

export default function CreateRetrospectivePage() {
  const [mode, setMode] = useState<'create' | 'schedule'>('create');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fsh, setFsh] = useState('');
  const [start, setStart] = useState('');
  const [recurrence, setRecurrence] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [count, setCount] = useState(1);
  const router = useRouter();

  // Datos de usuario actual
  const currentUser = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('currentUser') || 'null')
    : null;
  const assignedGroup = currentUser?.assignedGroup || '';
  const createdBy = currentUser?.email || 'unknown';

  // Guardar en array principal
  const saveToRetrospectives = (items: Occurrence[]) => {
    const all = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    localStorage.setItem('retrospectives', JSON.stringify([...all, ...items]));
  };

  // Crear retrospectiva inmediata
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fsh) {
      alert('Debes seleccionar un FSH');
      return;
    }
    const id = Date.now().toString();
    const retro: Occurrence = {
      id,
      title,
      description,
      fsh,
      createdAt: new Date().toISOString(),
      createdBy,
      assignedGroup,
      actions: [],
      votes: {},
      closed: false
    };
    // Sesión activa
    localStorage.setItem('retrospective', JSON.stringify(retro));
    // Agregar a lista
    saveToRetrospectives([retro]);

    alert('Retrospectiva creada exitosamente');
    router.push('/retrospective-session');
  };

  // Programar retrospectivas recurrentes
  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !fsh || !start) {
      alert('Completa título, FSH y fecha de inicio');
      return;
    }
    const occurrences: Occurrence[] = [];
    let date = new Date(start);

    for (let i = 0; i < count; i++) {
      occurrences.push({
        id: `${Date.now()}-${i}`,
        title,
        description,
        fsh,
        scheduledAt: formatISO(date),
        createdAt: new Date().toISOString(),
        createdBy,
        assignedGroup,
        actions: [],
        votes: {},
        closed: false
      });
      if (recurrence === 'daily') date = addDays(date, 1);
      else if (recurrence === 'weekly') date = addWeeks(date, 1);
      else date = addMonths(date, 1);
    }

    saveToRetrospectives(occurrences);
    alert('Retrospectivas programadas exitosamente');
    router.push('/dashboard');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{mode === 'create' ? 'Crear Retrospectiva' : 'Programar Retrospectivas'}</h2>
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
            <option value="">-- Seleccione --</option>
            <option value="Comunicación">Comunicación</option>
            <option value="Compromiso">Compromiso</option>
            <option value="Colaboración">Colaboración</option>
            <option value="Motivación">Motivación</option>
            <option value="Satisfacción laboral">Satisfacción laboral</option>
            <option value="Inteligencia emocional">Inteligencia emocional</option>
            {/* Agrega más opciones según tus HU */}
          </select>
        </div>

        {mode === 'schedule' && (
          <>
            <div>
              <label>Fecha y hora inicio:</label><br />
              <input
                type="datetime-local"
                value={start}
                onChange={e => setStart(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Periodicidad:</label><br />
              <select
                value={recurrence}
                onChange={e => setRecurrence(e.target.value as any)}
              >
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
          {mode === 'create' ? 'Crear' : 'Programar'}
        </button>
      </form>
    </div>
  );
}
