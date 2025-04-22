'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RetrospectiveListPage() {
  const [retrospectives, setRetrospectives] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const storedRetrospectives = localStorage.getItem('retrospectives');
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
    
    if (storedRetrospectives && user && user.assignedGroup) {
      const allRetros = JSON.parse(storedRetrospectives);
      // Filtra las retrospectivas que pertenecen al grupo del usuario
      const groupRetros = allRetros.filter((retro: any) =>
        retro.assignedGroup &&
        user.assignedGroup &&
        typeof retro.assignedGroup === 'string' &&
        typeof user.assignedGroup === 'string' &&
        retro.assignedGroup.trim() === user.assignedGroup.trim()
      );
      setRetrospectives(groupRetros);
    }
  }, []);

  if (!currentUser) return <div>No se encontró información del usuario.</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Retrospectivas de tu grupo</h2>
      {retrospectives.length > 0 ? (
        <ul>
          {retrospectives.map((retro: any) => (
            <li key={retro.id} style={{ marginBottom: '1rem' }}>
              <h3>{retro.title}</h3>
              <p>{retro.description}</p>
              <p><strong>FSH:</strong> {retro.fsh}</p>
              <Link href={`/retrospective-session?id=${retro.id}`}>
                Ingresar a esta retrospectiva
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay retrospectivas registradas para tu grupo.</p>
      )}
    </div>
  );
}
