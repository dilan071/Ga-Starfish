'use client';
import { useState, useEffect } from 'react';

export default function InvitationPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  }, []);

  if (!currentUser) {
    return <div>No hay usuario en sesión.</div>;
  }

  if (currentUser.assignedGroup) {
    return <div>Ya tienes un grupo asignado. Revisa tu Dashboard.</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Lista de Espera</h2>
      <p>El administrador aún no te ha asignado a un grupo.</p>
    </div>
  );
}
