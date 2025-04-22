'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RetrospectiveSessionPage() {
  const [retrospective, setRetrospective] = useState<any>(null);
  const [actionText, setActionText] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [userVotedAction, setUserVotedAction] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const retrospectiveId = searchParams.get('id');

  // Función para obtener avatar de un email
  const getAvatar = (email: string) => {
    const all = JSON.parse(localStorage.getItem('users') || '[]');
    const u = all.find((x: any) => x.email === email);
    return u?.avatar || '/default-avatar.png';
  };

  // Mapeo de preguntas por FSH
  const questionsMapping: { [key: string]: string[] } = {
    'Comunicación': [
      '¿En qué momentos del sprint la comunicación fue efectiva y cómo podemos replicarla en el futuro?',
      '¿Hubo situaciones donde la falta de claridad en la comunicación generó malentendidos? ¿Cómo podríamos evitarlo?'
    ],
    'Compromiso': [
      '¿Cómo percibimos el nivel de compromiso individual y colectivo durante el sprint? ¿Qué factores lo influyeron?',
      '¿Qué acciones concretas podríamos tomar para fortalecer el compromiso en los próximos sprints?'
    ],
    'Colaboración': [
      '¿En qué tareas o situaciones la colaboración entre el equipo fue clave para el éxito?',
      '¿Identificamos oportunidades donde una mayor colaboración hubiera acelerado o mejorado los resultados?'
    ],
    'Motivación': [
      '¿Qué aspectos del sprint aumentaron o disminuyeron la motivación del equipo? ¿Cómo podemos potenciarlos?',
      '¿Cómo podemos asegurar que las responsabilidades asignadas estén alineadas con los intereses y motivaciones individuales?'
    ],
    'Satisfacción laboral': [
      '¿Qué elementos del trabajo durante el sprint contribuyeron a su satisfacción personal?',
      '¿Qué cambios en la dinámica del equipo o en las tareas mejorarían la satisfacción general?'
    ],
    'Inteligencia emocional': [
      '¿Cómo manejamos los conflictos o situaciones de estrés durante el sprint? ¿Qué habilidades emocionales podríamos reforzar?',
      '¿De qué manera podemos fomentar un ambiente donde se priorice la empatía y el respeto mutuo?'
    ],
    'Cohesión de equipo': [
      '¿Qué actividades o dinámicas durante el sprint fortalecieron la unión y confianza entre los miembros del equipo? ¿Cómo podemos replicarlas?',
      '¿Hubo momentos en los que percibimos falta de alineación o desconexión en el equipo? ¿Qué acciones podrían ayudarnos a mejorar esto en futuros sprints?'
    ],
    'Empatía y relaciones': [
      '¿En qué situaciones durante el sprint percibimos que la empatía facilitó la resolución de conflictos o mejoró la dinámica del equipo?',
      '¿Hubo momentos en los que las diferencias interpersonales afectaron la colaboración?'
    ],
    'Liderazgo': [
      '¿El liderazgo durante el sprint facilitó la toma de decisiones? ¿Qué ajustes sugerirían?',
      '¿Cómo podemos distribuir roles de liderazgo para aprovechar las fortalezas de cada miembro?'
    ],
    'Autonomía': [
      '¿En qué tareas o decisiones durante el sprint el equipo sintió que tuvo suficiente autonomía para actuar con agilidad? ¿Cómo podemos replicar ese escenario en el futuro?',
      '¿Hubo momentos en los que la falta de claridad en los límites de autonomía generó confusión o retrasos? ¿Qué ajustes podríamos hacer para equilibrar libertad y alineación?'
    ],
    'Innovación': [
      '¿Qué oportunidades identificamos durante el sprint para probar enfoques o herramientas nuevas? ¿Cómo podemos priorizar la experimentación en futuros sprints?',
      '¿Hubo barreras (culturales, técnicas o de procesos) que limitaron la creatividad o la implementación de ideas innovadoras? ¿Cómo podríamos abordarlas?'
    ],
    'Habilidades y experiencia en el desarrollo de software': [
      '¿Las habilidades técnicas del equipo fueron suficientes para abordar los desafíos del sprint? ¿En qué áreas necesitamos capacitación?',
      '¿Cómo podemos compartir conocimientos entre los miembros para fortalecer las habilidades colectivas?'
    ],
    'Habilidades y experiencia en la gestión de proyectos de desarrollo de software': [
      '¿La planificación y seguimiento del sprint aprovecharon la experiencia previa del equipo? ¿Qué lecciones aplicaremos en el futuro?',
      '¿Identificamos brechas en la gestión de riesgos o recursos que debamos abordar con mayor experiencia?'
    ],
  };


  // Cargar retrospectiva y usuario desde localStorage
  useEffect(() => {
    const storedRetrospectives = localStorage.getItem('retrospectives');
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  
    if (storedRetrospectives) {
      const retros = JSON.parse(storedRetrospectives);
      let retroToLoad = null;
  
      if (retrospectiveId) {
        retroToLoad = retros.find((retro: any) => retro.id && retro.id === retrospectiveId);
      } else if (user && user.assignedGroup) {
        const retrospectivesForGroup = retros.filter((retro: any) => 
          retro.assignedGroup && retro.assignedGroup.trim() === user.assignedGroup.trim() && retro.closed === false
        );
        retrospectivesForGroup.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        retroToLoad = retrospectivesForGroup.length > 0 ? retrospectivesForGroup[0] : null;
      }
  
      if (retroToLoad) {
        setRetrospective(retroToLoad);
        setIsAuthorized(true);
      } else {
        setRetrospective(null);
        setIsAuthorized(false);
      }
    }
  }, [retrospectiveId]);

  useEffect(() => {
    if (retrospective && currentUser && retrospective.votes) {
      const voteId = retrospective.votes[currentUser.email];
      if (voteId) {
        setHasVoted(true);
        setUserVotedAction(voteId);
      }
    }
  }, [retrospective, currentUser]);

  // Función para otorgar puntos
  const addPoint = (type: 'vote' | 'comment') => {
    if (!currentUser) return;
    const record = JSON.parse(localStorage.getItem('points') || '[]');
    const entry = {
      email: currentUser.email,
      type,
      date: new Date().toISOString(),
      points: type === 'vote' ? 1 : 2
    };
    localStorage.setItem('points', JSON.stringify([...record, entry]));
  };

  // Agregar nueva acción (comentario)
  const handleAddAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!actionText.trim()) return;

    const newAction = {
      id: Date.now().toString(),
      text: actionText.trim(),
      createdBy: currentUser?.email || 'desconocido',
      voteCount: 0
    };

    const updated = {
      ...retrospective,
      actions: retrospective.actions ? [...retrospective.actions, newAction] : [newAction],
      votes: retrospective.votes || {}
    };

    localStorage.setItem('retrospective', JSON.stringify(updated));
    setRetrospective(updated);
    setActionText('');
    addPoint('comment');
  };

  // Votar o cambiar voto
  const handleVote = (actionId: string) => {
    if (retrospective.closed) {
      alert('La retrospectiva está cerrada. No se pueden emitir votos.');
      return;
    }
    if (!currentUser) return;

    const prevVote = retrospective.votes?.[currentUser.email];
    const updatedActions = retrospective.actions.map((a: any) => {
      if (a.id === actionId) return { ...a, voteCount: a.voteCount + 1 };
      if (a.id === prevVote) return { ...a, voteCount: Math.max(0, a.voteCount - 1) };
      return a;
    });

    const updatedVotes = { ...retrospective.votes, [currentUser.email]: actionId };
    const updated = { ...retrospective, actions: updatedActions, votes: updatedVotes };

    localStorage.setItem('retrospective', JSON.stringify(updated));
    setRetrospective(updated);
    setHasVoted(true);
    setUserVotedAction(actionId);
    addPoint('vote');
  };

  // Toggle preguntas FSH
  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  // Cerrar retrospectiva (solo Scrum Master)
  const handleCloseRetrospective = () => {
    if (!currentUser) return;
    if (currentUser.email !== retrospective.createdBy) {
      alert('No tienes permiso para cerrar esta retrospectiva.');
      return;
    }
    const updatedRetro = {
      ...retrospective,
      closed: true
    };

    const storedRetrospectives = localStorage.getItem('retrospectives');
    if (storedRetrospectives) {
      const retros = JSON.parse(storedRetrospectives);
      const updatedRetros = retros.map((retro: any) => {
        if (
          retro.assignedGroup &&
          currentUser &&
          retro.assignedGroup.trim() === currentUser.assignedGroup.trim() &&
          retro.createdAt === retrospective.createdAt
        ) {
          return updatedRetro;
        }
        return retro;
      });
      localStorage.setItem('retrospectives', JSON.stringify(updatedRetros));
    }
    setRetrospective(updatedRetro);
    alert('Retrospectiva cerrada.');
  };

  if (!retrospective) return <div>No hay retrospectiva activa.</div>;
  if (!isAuthorized) return <div>No tienes permiso para ver esta retrospectiva.</div>;

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
          onChange={(e) => setActionText(e.target.value)}
          disabled={retrospective.closed}
        />
        <button type="submit" disabled={retrospective.closed}>
          Agregar Acción
        </button>
      </form>

      <hr />
      <h3>Acciones Agregadas</h3>
      {retrospective.actions?.length ? (
        <ul>
          {retrospective.actions.map((action: any) => (
            <li key={action.id} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
              <img
                src={getAvatar(action.createdBy)}
                alt="avatar"
                style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '0.5rem' }}
              />
              <div style={{ flex: 1 }}>
                <strong>{action.createdBy}</strong>: {action.text}
              </div>
              <div style={{ marginLeft: '1rem' }}>
                {action.voteCount} votos
                <button
                  onClick={() => handleVote(action.id)}
                  disabled={hasVoted}
                  style={{ marginLeft: '0.5rem' }}
                >
                  {userVotedAction === action.id ? 'Has votado' : 'Votar'}
                </button>
              </div>
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
          <h3>Preguntas para {retrospective.fsh}</h3>
          <ul>
            {(questionsMapping[retrospective.fsh] || []).map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      )}

      {currentUser?.email === retrospective?.createdBy && !retrospective?.closed && (
        <button onClick={handleCloseRetrospective}>Cerrar Retrospectiva</button>
      )}
    </div>
  );
}
