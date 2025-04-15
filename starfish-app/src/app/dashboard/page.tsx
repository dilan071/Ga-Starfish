'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [retrospectives, setRetrospectives] = useState<any[]>([]);
  const router = useRouter();
  const { handleLogout } = useAuth();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) {
      router.push('/login');
    } else {
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUser = allUsers.find((u: any) => u.email === user.email);
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));

      // Cargar retrospectivas del grupo actual
      const storedRetrospectives = localStorage.getItem('retrospectives');
      if (storedRetrospectives && updatedUser.assignedGroup) {
        const allRetros = JSON.parse(storedRetrospectives);
        const filteredRetros = allRetros.filter((retro: any) =>
          retro.assignedGroup &&
          typeof retro.assignedGroup === 'string' &&
          retro.assignedGroup.trim() === updatedUser.assignedGroup.trim()
        );
        // Ordenar descendientemente por fecha de creación
        filteredRetros.sort(
          (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setRetrospectives(filteredRetros);
      }
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
    <div style={{ padding: '1rem' }}>
      <h2>Dashboard</h2>
      <p>
        <strong>Grupo:</strong> {currentUser.assignedGroup}
      </p>
      <p>
        <strong>Rol en el grupo:</strong> {currentUser.groupRole || 'N/A'}
      </p>

      <div style={{ marginBottom: '1rem' }}>
        {/* Agregar enlace para ir a la nueva página de lista de retrospectivas */}
        <Link href="/retrospective-list">
            Ver todas las retrospectivas del grupo
        </Link>
      </div>

      <div>
        <h3>Retrospectivas Recientes</h3>
        {retrospectives.length === 0 ? (
          <p>No hay retrospectivas creadas.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {retrospectives.slice(0, 3).map((retro: any, index: number) => (
              <li
                key={index}
                style={{
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  padding: '0.5rem',
                  borderRadius: '4px'
                }}
              >
                <h4>{retro.title}</h4>
                <p>{retro.description}</p>
                <p>
                  <strong>FSH:</strong> {retro.fsh}
                </p>
                <p>
                  <strong>Creada:</strong> {new Date(retro.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Estado:</strong> {retro.closed ? 'Cerrada' : 'Abierta'}
                </p>
                {/* Puedes agregar más botones o acciones para cada retrospectiva aquí */}
              </li>
            ))}
          </ul>
        )}
      </div>

      {currentUser.groupRole === 'Scrum Master' ? (
        <div>
          <h3>Opciones de Scrum Master:</h3>
          <ul>
            <li>
              <Link href="/create-retrospective">Crear Retrospectiva</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <h3>Opciones disponibles:</h3>
          <ul>
            <li>Consulta las retrospectivas del grupo arriba.</li>
          </ul>
        </div>
      )}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

