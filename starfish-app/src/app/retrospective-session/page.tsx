'use client';
import { useState, useEffect } from 'react';

export default function RetrospectiveSessionPage() {
  const [retrospective, setRetrospective] = useState<any>(null);
  const [actionText, setActionText] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Cargar retrospectiva y usuario actual
  useEffect(() => {
    const storedRetro = localStorage.getItem('retrospective');
    if (storedRetro) {
      setRetrospective(JSON.parse(storedRetro));
    }
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  }, []);

  // Revisar si el usuario ya ha votado
  useEffect(() => {
    if (retrospective && currentUser && retrospective.votes) {
      if (retrospective.votes[currentUser.email]) {
        setHasVoted(true);
      }
    }
  }, [retrospective, currentUser]);

  const handleAddAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!actionText.trim()) return;

    const newAction = {
      id: Date.now().toString(),
      text: actionText.trim(),
      createdBy: currentUser?.email || 'desconocido',
      voteCount: 0
    };

    const updatedRetro = {
      ...retrospective,
      actions: retrospective.actions ? [...retrospective.actions, newAction] : [newAction],
      votes: retrospective.votes || {}
    };

    localStorage.setItem('retrospective', JSON.stringify(updatedRetro));
    setRetrospective(updatedRetro);
    setActionText('');
  };

  const handleVote = (actionId: string) => {
    if (!currentUser) return;
    if (retrospective.votes && retrospective.votes[currentUser.email]) {
      alert('Ya has votado');
      return;
    }
    const updatedActions = retrospective.actions.map((action: any) => {
      if (action.id === actionId) {
        return { ...action, voteCount: action.voteCount + 1 };
      }
      return action;
    });
    const updatedVotes = { ...retrospective.votes, [currentUser.email]: actionId };

    const updatedRetro = {
      ...retrospective,
      actions: updatedActions,
      votes: updatedVotes
    };

    localStorage.setItem('retrospective', JSON.stringify(updatedRetro));
    setRetrospective(updatedRetro);
    setHasVoted(true);
  };

  // Ejemplo de mapeo de preguntas (puedes ajustarlo según tus necesidades)
  const questionsMapping: { [key: string]: string[] } = {
    'FSH1': ['Pregunta 1 para FSH1', 'Pregunta 2 para FSH1'],
    'FSH2': ['Pregunta 1 para FSH2', 'Pregunta 2 para FSH2'],
    'FSH3': ['Pregunta 1 para FSH3', 'Pregunta 2 para FSH3'],
  };

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  if (!retrospective) return <div>No hay retrospectiva activa.</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Retrospectiva: {retrospective.title}</h2>
      <p>{retrospective.description}</p>
      {retrospective.fsh && (
        <p>
          FSH: <span style={{ color: 'blue' }}>{retrospective.fsh}</span>
        </p>
      )}

      <hr />
      <h3>Agregar Acción</h3>
      <form onSubmit={handleAddAction}>
        <input 
          type="text"
          placeholder="Escribe tu acción"
          value={actionText}
          onChange={e => setActionText(e.target.value)}
        />
        <button type="submit">Agregar Acción</button>
      </form>

      <hr />
      <h3>Acciones Agregadas</h3>
      {retrospective.actions && retrospective.actions.length > 0 ? (
        <ul>
          {retrospective.actions.map((action: any) => (
            <li key={action.id}>
              {action.text} <em>({action.createdBy})</em> - Votos: {action.voteCount}
              {!hasVoted && currentUser && (
                <button onClick={() => handleVote(action.id)}>Votar</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se han agregado acciones aún.</p>
      )}

      <hr />
      <button onClick={toggleQuestions}>
        {showQuestions ? 'Ocultar Preguntas' : 'Ver Preguntas'}
      </button>
      {showQuestions && retrospective.fsh && (
        <div>
          <h3>Preguntas para {retrospective.fsh}:</h3>
          <ul>
            {(questionsMapping[retrospective.fsh] || []).map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
