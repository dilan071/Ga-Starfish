'use client';
import { useState, useEffect } from 'react';

interface ActionsMap { 
  [category: string]: string[] 
}
interface VotesMap { 
  [key: string]: number 
}
interface UserVotesMap { 
  [email: string]: string 
}

export default function VoteActions() {
  const [actions, setActions] = useState<ActionsMap>({});
  const [votes, setVotes] = useState<VotesMap>({});
  const [userVotes, setUserVotes] = useState<UserVotesMap>({});
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(null);

  // Función para obtener avatar de un email
  const getAvatar = (email: string) => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const found = allUsers.find((u: any) => u.email === email);
    return found?.avatar || '/default-avatar.png';
  };

  // Carga inicial: usuario, acciones, votos globales y votos/abstenciones de usuarios
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) setCurrentUser(JSON.parse(storedUser));

    const storedActions = localStorage.getItem('actions');
    if (storedActions) setActions(JSON.parse(storedActions));

    const storedVotes = localStorage.getItem('votes');
    setVotes(storedVotes ? JSON.parse(storedVotes) : {});

    const storedUserVotes = localStorage.getItem('userVotes');
    setUserVotes(storedUserVotes ? JSON.parse(storedUserVotes) : {});
  }, []);

  if (!currentUser) return <div>Cargando usuario...</div>;

  const userEmail = currentUser.email;
  const userAction = userVotes[userEmail];
  const hasAbstained = userAction === 'abstain';
  const hasVoted     = !!userAction && userAction !== 'abstain';

  // Guardar votos globales
  const saveVotes = (updated: VotesMap) => {
    setVotes(updated);
    localStorage.setItem('votes', JSON.stringify(updated));
  };
  // Guardar voto/abstención del usuario
  const saveUserVotes = (updated: UserVotesMap) => {
    setUserVotes(updated);
    localStorage.setItem('userVotes', JSON.stringify(updated));
  };

  // Handler de votar
  const handleVote = (category: string, idx: number) => {
    if (hasVoted || hasAbstained) return;
    const key = `${category}-${idx}`;
    const updatedVotes = { ...votes, [key]: (votes[key] || 0) + 1 };
    saveVotes(updatedVotes);
    saveUserVotes({ ...userVotes, [userEmail]: key });
  };

  // Handler de abstenerme
  const handleAbstain = () => {
    if (hasVoted || hasAbstained) return;
    saveUserVotes({ ...userVotes, [userEmail]: 'abstain' });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img
          src={getAvatar(currentUser.email)}
          alt="Mi Avatar"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '0.5rem' }}
        />
        <h2>Votar por Acciones</h2>
      </div>

      <button
        onClick={handleAbstain}
        disabled={hasVoted || hasAbstained}
        style={{ marginBottom: '1rem' }}
      >
        {hasAbstained ? 'Ya te abstuviste' : 'Me abstengo de votar'}
      </button>

      {Object.keys(actions).map(category => (
        <div key={category} style={{ marginBottom: '1.5rem' }}>
          <h3>{category}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {actions[category].map((actionText, idx) => {
              const actionKey = `${category}-${idx}`;
              return (
                <li
                  key={actionKey}
                  style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}
                >
                  <img
                    src={getAvatar(currentUser.email)}
                    alt="Mi Avatar"
                    style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '0.5rem' }}
                  />
                  <div style={{ flex: 1 }}>{actionText}</div>
                  <div style={{ marginLeft: '1rem' }}>
                    Votos: {votes[actionKey] || 0}
                    <button
                      onClick={() => handleVote(category, idx)}
                      disabled={hasVoted || hasAbstained}
                      style={{ marginLeft: '0.5rem' }}
                    >
                      {hasVoted ? 'Ya votaste' : 'Votar'}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
