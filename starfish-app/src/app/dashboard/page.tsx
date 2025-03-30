'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) {
      router.push('/login');
    } else {
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUser = allUsers.find((u: any) => u.email === user.email);
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  }, [router]);

  if (!currentUser) return <div>Cargando...</div>;
  if (!currentUser.assignedGroup) return <div>No tienes un grupo asignado. (Ver /invitation)</div>;

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', 'false');
    router.push('/login');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Dashboard</h2>
      <p><strong>Grupo:</strong> {currentUser.assignedGroup}</p>
      <p><strong>Rol en el grupo:</strong> {currentUser.groupRole || 'N/A'}</p>

      {currentUser.groupRole === 'scrum-master' ? (
        <div>
          <h3>Opciones de Scrum Master:</h3>
          <ul>
            <li><Link href="/create-retrospective">Crear Retrospectiva</Link></li>
            {}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Opciones de Usuario Normal:</h3>
          <ul>
            <li><Link href="/add-actions">Agregar Acciones</Link></li>
            <li><Link href="/vote-actions">Votar Acciones</Link></li>
            <li><Link href="/retrospective-session">Ingresar a la Retrospectiva</Link></li>
            <li><Link href="/view-questions">Ver Preguntas</Link></li>
          </ul>
        </div>
      )}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}
