// src/app/vote-actions/page.tsx
'use client';
import { useState, useEffect } from 'react';

export default function VoteActions() {
  const [actions, setActions] = useState<{ [key: string]: string[] }>({});
  const [votes, setVotes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const storedActions = localStorage.getItem('actions');
    if (storedActions) {
      const parsed = JSON.parse(storedActions);
      setActions(parsed);
      const initialVotes: { [key: string]: number } = {};
      Object.keys(parsed).forEach(cat => {
        parsed[cat].forEach((_: string, idx: number) => {
          initialVotes[`${cat}-${idx}`] = 0;
        });
      });
      setVotes(initialVotes);
    }
  }, []);

  const handleVote = (cat: string, idx: number) => {
    const key = `${cat}-${idx}`;
    const updatedVotes = { ...votes, [key]: votes[key] + 1 };
    setVotes(updatedVotes);
    localStorage.setItem('votes', JSON.stringify(updatedVotes));
  };

  return (
    <div>
      <h2>Votar por Acciones</h2>
      {Object.keys(actions).map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <ul>
            {actions[cat].map((action: string, idx: number) => (
              <li key={idx}>
                {action} - Votos: {votes[`${cat}-${idx}`] || 0}
                <button onClick={() => handleVote(cat, idx)}>Votar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
