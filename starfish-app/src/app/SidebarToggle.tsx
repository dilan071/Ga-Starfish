// src/app/SidebarToggle.tsx
'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

interface CurrentUser {
  email: string;
  role: 'admin' | 'scrum-master' | 'user' | string;
}

interface Props {
  children: React.ReactNode;
  hideOnPaths?: string[];            // <-- nuevo prop
}

export default function SidebarToggle({
  children,
  hideOnPaths = ['/login', '/register', '/error404', '/']
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {
    setIsClient(true);
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    const su = localStorage.getItem('currentUser');
    setCurrentUser(su ? JSON.parse(su) : null);
  }, [pathname]);

  const toggleSidebar = () => setSidebarOpen(o => !o);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    router.push('/login');
  };

  const handleLinkClick = () => setSidebarOpen(false);

  if (!isClient || hideOnPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <button onClick={toggleSidebar} className={styles.menuToggle}>
          {sidebarOpen ? 'Cerrar Menú' : 'Abrir Menú'}
        </button>
        {sidebarOpen && (
          <div className={styles.dropdown}>
            <nav>
              <ul className={styles.menuList}>
                {!isLoggedIn ? (
                  <>
                    <li onClick={handleLinkClick}>
                      <Link href="/register">Registrarse</Link>
                    </li>
                    <li onClick={handleLinkClick}>
                      <Link href="/login">Iniciar Sesión</Link>
                    </li>
                  </>
                ) : currentUser?.role === 'admin' ? (
                  <>
                    <li onClick={handleLinkClick}><Link href="/members">Gestionar Miembros</Link></li>
                  </>
                ) : currentUser?.role === 'scrum-master' ? (
                  <>
                    <li onClick={handleLinkClick}><Link href="/create-retrospective">Crear Retrospectiva</Link></li>
                  </>
                ) : (
                  <>
                    <li onClick={handleLinkClick}><Link href="/dashboard">Página Principal</Link></li>
                  </>
                )}
                {isLoggedIn && (
                  <li>
                    <button onClick={handleLogout} className={styles.logoutBtn}>
                      Cerrar Sesión
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        )}
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

