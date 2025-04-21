// RetrospectiveListPage.tsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SidebarToggle from '../SidebarToggle';
import styles from './Retrospective-List.module.css';

export default function RetrospectiveListPage() {
  const [retrospectives, setRetrospectives] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('retrospectives');
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) setCurrentUser(user);
    if (stored && user && user.assignedGroup) {
      const all = JSON.parse(stored) as any[];
      const filtered = all
        .filter(r => r.assignedGroup?.trim() === user.assignedGroup?.trim())
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setRetrospectives(filtered);
    }
  }, []);

  const handleClose = (retroId: string) => {
    if (!currentUser) return;
    const retro = retrospectives.find(r => r.id === retroId);
    if (!retro) return;
    if (currentUser.email !== retro.createdBy) {
      alert('No tienes permiso para cerrar esta retrospectiva.');
      return;
    }
    const updated = { ...retro, closed: true };
    const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const updatedAll = stored.map((r: any) => (r.id === retroId ? updated : r));
    localStorage.setItem('retrospectives', JSON.stringify(updatedAll));
    setRetrospectives(prev => prev.map(r => (r.id === retroId ? updated : r)));
    alert('Retrospectiva cerrada.');
  };

  if (!currentUser) return <div>Cargando información...</div>;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/img/starfish.png" alt="Ga-Starfish Logo" className={styles.logoImage} />
          <span className={styles.projectName}>Ga-Starfish</span>
        </div>
        <h1 className={styles.pageTitle}>Retrospectivas de tu grupo</h1>
        <div className={styles.menuWrapper}>
          <SidebarToggle> </SidebarToggle>
        </div>
      </header>

      <section className={styles.listSection}>
        {retrospectives.length === 0 ? (
          <p>No hay retrospectivas registradas para tu grupo.</p>
        ) : (
          retrospectives.map(retro => (
            <div key={retro.id} className={styles.retroCard}>
              <div className={styles.retroInfo}>
                <h4>{retro.title}</h4>
                <p>{retro.description}</p>
                <span><strong>FSH:</strong> {retro.fsh}</span>
                <span>
                  <strong>Estado:</strong> {retro.closed ? 'Cerrada' : 'Abierta'}
                </span>
              </div>
              <button
                className={styles.enterBtn}
                onClick={() => router.push(`/retrospective-session?id=${retro.id}`)}
              >
                Ingresar a la retrospectiva
              </button>
              {!retro.closed && currentUser.email === retro.createdBy && (
                <button
                  className={styles.closeBtn}
                  onClick={() => handleClose(retro.id)}
                >
                  Cerrar retrospectiva
                </button>
              )}
            </div>
          ))
        )}
      </section>
    </main>
  );
}
