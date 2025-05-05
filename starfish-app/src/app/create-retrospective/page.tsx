'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarToggle from '../SidebarToggle';
import styles from './Create-retrospective.module.css';
import Swal from 'sweetalert2';
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

  const currentUser = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('currentUser') || 'null')
    : null;
  const assignedGroup = currentUser?.assignedGroup || '';
  const createdBy = currentUser?.email || 'unknown';

  const saveToRetrospectives = (items: Occurrence[]) => {
    const all = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    localStorage.setItem('retrospectives', JSON.stringify([...all, ...items]));
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fsh) {
      Swal.fire({
        text: "Debes seleccionar un FSH para finalizar.",
        icon: "error",
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false 
      });
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
    saveToRetrospectives([retro]);

    Swal.fire({
      text: "Retrospectiva creada exitosamente.",
      icon: "success",
      confirmButtonColor: '#ef4444',
      iconColor: '#ef4444',
      confirmButtonText: 'Cerrar'
    }).then(() => router.push('/retrospective-list'));
  };

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !fsh || !start) {
      Swal.fire({
        text: "Completa título, FSH y fecha de inicio.",
        icon: "warning",
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar'
      });
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

    Swal.fire({
      text: "Retrospectivas programadas exitosamente.",
      icon: "success",
      confirmButtonColor: '#ef4444',
      iconColor: '#ef4444',
      confirmButtonText: 'Cerrar'
    }).then(() => router.push('/dashboard'));
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/img/starfish.png" alt="Ga-Starfish Logo" className={styles.logoImage} />
          <span className={styles.projectName}>Ga-Starfish</span>
        </div>
        <h1 className={styles.pageTitle}>Crear Retrospectiva</h1>
        <div className={styles.menuWrapper}>
          <SidebarToggle children={undefined} /> {}
        </div>
      </header>

      <section className={styles.formSection}>
        <div className={styles.modeSwitch}>
          <button type="button" onClick={() => setMode('create')} disabled={mode === 'create'}>Crear única</button>
          <button type="button" onClick={() => setMode('schedule')} disabled={mode === 'schedule'}>Programar</button>
        </div>

        <form onSubmit={mode === 'create' ? handleCreate : handleSchedule}>
          <div className={styles.formGroup}>
            <label htmlFor="title"><strong>Título:</strong></label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description"><strong>Descripción</strong></label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              className={styles.textarea}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="fsh"><strong>Seleccionar FSH:</strong></label>
            <select
              id="fsh"
              value={fsh}
              onChange={e => setFsh(e.target.value)}
              required
              className={styles.select}
            >
              <option value="">Ninguno</option>
              <option value="Comunicación">Comunicación</option>
              <option value="Compromiso">Compromiso</option>
              <option value="Colaboración">Colaboración</option>
              <option value="Motivación">Motivación</option>
              <option value="Satisfacción laboral">Satisfacción laboral</option>
              <option value="Inteligencia emocional">Inteligencia emocional</option>
              <option value="Cohesión de equipo">Cohesión de equipo</option>
              <option value="Empatía y relaciones interpersonales">Empatía y relaciones interpersonales</option>
              <option value="Liderazgo">Liderazgo</option>
              <option value="Autonomía">Autonomía</option>
              <option value="Innovación">Innovación</option>
              <option value="Habilidades y experiencia en el proceso de desarrollo de software">Habilidades y experiencia en el proceso de desarrollo de software</option>
              <option value="Habilidades y experiencia en la gestión de proyectos de desarrollo de software">Habilidades y experiencia en la gestión de proyectos de desarrollo de software</option>
            </select>
          </div>

          {mode === 'schedule' && (
            <>
              <div className={styles.formGroup}>
                <label><strong>Fecha de inicio:</strong></label>
                <input
                  type="date"
                  value={start}
                  onChange={e => setStart(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label><strong>Frecuencia:</strong></label>
                <select
                  value={recurrence}
                  onChange={e => setRecurrence(e.target.value as 'daily' | 'weekly' | 'monthly')}
                  className={styles.select}
                >
                  <option value="daily">Diaria</option>
                  <option value="weekly">Semanal</option>
                  <option value="monthly">Mensual</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label><strong>Repeticiones:</strong></label>
                <input
                  type="number"
                  min={1}
                  value={count}
                  onChange={e => setCount(Number(e.target.value))}
                  className={styles.input}
                />
              </div>
            </>
          )}

          <button type="submit" className={styles.button}>
            {mode === 'create' ? 'Crear Retrospectiva' : 'Programar Retrospectivas'}
          </button>
        </form>
      </section>
    </main>
  );
}
