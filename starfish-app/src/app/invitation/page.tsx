'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function InvitationPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const { handleLogout } = useAuth();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  }, []);

  if (!currentUser) {
    return (
      <div style={{ padding: '1rem' }}>
        <h2>No hay usuario en sesión.</h2>
      </div>
    );
  }

  if (currentUser.assignedGroup) {
    return (
      <div style={{ padding: '1rem' }}>
        <h2>Ya tienes un grupo asignado.</h2>
        <p>Por favor, revisa tu Dashboard.</p>
        <button onClick={handleLogout} style={{ marginTop: '1rem' }}>
          Cerrar Sesión
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Lista de Espera</h2>
      <p>El administrador aún no te ha asignado a un grupo.</p>
      <button onClick={handleLogout} style={{ marginTop: '1rem' }}>
        Cerrar Sesión
      </button>
    </div>
  );
}
