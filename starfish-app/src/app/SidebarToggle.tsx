'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';

interface CurrentUser {
  email: string;
  role: 'admin' | 'scrum-master' | 'user' | string;
}

export default function SidebarToggle({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Se lee el estado actualizado de autenticación cada vez que cambia la ruta
    const logged = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(logged === 'true');
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    } else {
      setCurrentUser(null);
    }
  }, [pathname]);

  const handleLinkClick = () => setSidebarOpen(true);
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
                    <li>
                      <Link href="/register" onClick={handleLinkClick}>
                        Registrarse
                      </Link>
                    </li>
                    <li>
                      <Link href="/login" onClick={handleLinkClick}>
                        Iniciar Sesión
                      </Link>
                    </li>
                  </>
                ) : currentUser?.role === 'admin' ? (
                  <>
                    <li>
                      <Link href="/" onClick={handleLinkClick}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/members" onClick={handleLinkClick}>
                        Gestionar Miembros
                      </Link>
                    </li>
                  </>
                ) : currentUser?.role === 'scrum-master' ? (
                  <>
                    <li>
                      <Link href="/" onClick={handleLinkClick}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/create-retrospective" onClick={handleLinkClick}>
                        Crear Retrospectiva
                      </Link>
                    </li>
                    <li>
                      <Link href="/select-fsh" onClick={handleLinkClick}>
                        Seleccionar FSH
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/dashboard" onClick={handleLinkClick}>
                        Dashboard
                      </Link>
                    </li>
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
