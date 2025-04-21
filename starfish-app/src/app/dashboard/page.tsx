'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import SidebarToggle from '../SidebarToggle';
import styles from './Dashboard.module.css';

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [retrospectives, setRetrospectives] = useState<any[]>([]);
  const router = useRouter();
  const { handleLogout } = useAuth();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) {
      router.push('/login');
      return;
    }
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updated = allUsers.find((u: any) => u.email === user.email);
    setCurrentUser(updated);
    localStorage.setItem('currentUser', JSON.stringify(updated));

    // cargar y filtrar
    const stored = localStorage.getItem('retrospectives');
    if (stored && updated.assignedGroup) {
      const allRetros = JSON.parse(stored);
      const filtered = allRetros
        .filter((r: any) => r.assignedGroup?.trim() === updated.assignedGroup.trim())
        .sort((a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      setRetrospectives(filtered);
    }
  }, [router]);

  if (!currentUser) return <div>Cargando...</div>;
  if (!currentUser.assignedGroup)
    return (
      <div>
        No tienes un grupo asignado. <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    );

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/img/starfish.png" alt="Ga-Starfish Logo" className={styles.logoImage} />
          <span className={styles.projectName}>Ga-Starfish</span>
        </div>
        <h1 className={styles.pageTitle}>Página Principal</h1>
        <div className={styles.menuWrapper}>
          <SidebarToggle>­</SidebarToggle>
        </div>
      </header>

      {/* 1. Listado de retrospectivas */}
      <section className={styles.retrosList}>
        <h2>Retrospectivas Recientes</h2>
        {retrospectives.length === 0 ? (
          <h3>No hay retrospectivas creadas.</h3>
        ) : (
          retrospectives.slice(0, 5).map((retro, i) => (
            <div key={i} className={styles.retroCard}>
              <div className={styles.retroInfo}>
                <h4>{retro.title}</h4>
                <p><strong>Descripción:</strong> {retro.description}</p>
                <span><strong>FSH:</strong> {retro.fsh}</span>
                <span>
                  <strong>Creada:</strong>{' '}
                  {new Date(retro.createdAt).toLocaleString()}
                </span>
                <span><strong>Estado:</strong> {retro.closed ? 'Cerrada' : 'Abierta'}</span>
              </div>
              <button
                className={styles.enterBtn}
                onClick={() => router.push(`/retrospective-session?id=${retro.id}`)}
              >
                Ingresar a la Retrospectiva
              </button>
            </div>
          ))
        )}
      </section>

      {/* 2. Menú lateral fijo */}
      <aside className={styles.menuAside}>
        <button
          className={styles.btnView}
          onClick={() => router.push('/retrospective-list')}
        >
          Ingresar a las Retrospectivas
        </button>
        {currentUser.groupRole === 'Scrum Master' && (
          <button
            className={styles.btnCreate}
            onClick={() => router.push('/create-retrospective')}
          >
            Crear Retrospectiva
          </button>
        )}
      </aside>
    </main>
  );
}

