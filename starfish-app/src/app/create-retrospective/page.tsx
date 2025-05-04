// CreateRetrospectivePage.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarToggle from '../SidebarToggle';
import styles from './Create-Retrospective.module.css';
import Swal from 'sweetalert2';

export default function CreateRetrospectivePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fsh, setFsh] = useState('');
  const router = useRouter();

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
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser || !currentUser.assignedGroup) {
      alert('No se pudo determinar el grupo del Scrum Master');
      return;
    }
    const newRetro = {
      id: Date.now().toString(),
      title,
      description,
      fsh,
      assignedGroup: currentUser.assignedGroup,
      createdBy: currentUser.email,
      createdAt: new Date(),
      actions: [],
      votes: {}
    };
    const stored = localStorage.getItem('retrospectives');
    const retros = stored ? JSON.parse(stored) : [];
    retros.push(newRetro);
    localStorage.setItem('retrospectives', JSON.stringify(retros));
    Swal.fire({
      text: "Se ha creado la retrospectiva exitosamente.",
      icon: "success",
      confirmButtonColor: '#ef4444',
      iconColor: '#ef4444',
      confirmButtonText: 'Cerrar'
    });
    router.push('/retrospective-list');
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
          <SidebarToggle> </SidebarToggle>
        </div>
      </header>

      <section className={styles.formSection}>
        <form onSubmit={handleCreate}>
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
              className={`${styles.textarea}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="fsh"><strong>Seleccionar FSH:</strong></label>
            <select
              id="fsh"
              value={fsh}
              onChange={e => setFsh(e.target.value)}
              required
              className="select"
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

          <button type="submit" className={styles.button}>
            Crear Retrospectiva
          </button>
        </form>
      </section>
    </main>
  );
}
