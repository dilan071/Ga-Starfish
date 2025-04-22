'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface CurrentUser {
  email: string;
  role: 'admin' | 'scrum-master' | 'user' | string;
}

export default function SidebarToggle({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(logged === 'true');
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <header className={styles.header}>
        <h1 className='hola'>Ga - Starfish</h1>
        <button onClick={toggleSidebar} className={styles.menuToggle}>
          {sidebarOpen ? 'Ocultar Menú' : 'Mostrar Menú'}
        </button>
      </header>
      <div className={styles.container}>
        {sidebarOpen && (
          <aside className={styles.sidebar}>
            <nav>
              <ul>
                {!isLoggedIn ? (
                  <>
                    <li><Link href="/register">Registrarse</Link></li>
                    <li><Link href="/login">Iniciar Sesión</Link></li>
                  </>
                ) : currentUser?.role === 'admin' ? (
                  <>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/members">Gestionar Miembros</Link></li>
                    {/* El admin no crea retrospectiva */}
                  </>
                ) : currentUser?.role === 'scrum-master' ? (
                  <>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/create-retrospective">Crear Retrospectiva</Link></li>
                    <li><Link href="/select-fsh">Seleccionar FSH</Link></li>
                  </>
                ) : (
                  // Usuario normal o invitado aceptado
                  <>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/add-actions">Agregar Acciones</Link></li>
                    <li><Link href="/vote-actions">Votar Acciones</Link></li>
                    <li><Link href="/retrospective-session">Ingresar a la Retrospectiva</Link></li>
                    <li><Link href="/view-questions">Ver Preguntas</Link></li>
                  </>
                )}
              </ul>
            </nav>
          </aside>
        )}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
