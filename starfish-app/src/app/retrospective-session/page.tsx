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
  const searchParams = useSearchParams();
  const retrospectiveId = searchParams.get('id');



  // Mapeo de preguntas por FSH
  

  useEffect(() => {
    const storedRetrospectives = localStorage.getItem('retrospectives');
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  
    if (storedRetrospectives) {
      const retros = JSON.parse(storedRetrospectives);
      let retroToLoad = null;
  
      if (retrospectiveId) {
        // Busca la retrospectiva por el id proporcionado en la URL
        retroToLoad = retros.find((retro: any) => retro.id && retro.id === retrospectiveId);
      } else if (user && user.assignedGroup) {
        // Busca la retrospectiva abierta más reciente del grupo del usuario
        const retrospectivesForGroup = retros
          .filter((retro: any) => 
            retro.assignedGroup && 
            typeof retro.assignedGroup === 'string' &&
            typeof user.assignedGroup === 'string' &&
            retro.assignedGroup.trim() === user.assignedGroup.trim() &&
            retro.closed === false // Solo retrospectivas abiertas
          )
          .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); // Ordenar por fecha de creación (desc)
  
        retroToLoad = retrospectivesForGroup.length > 0 ? retrospectivesForGroup[0] : null;
      }
  
      console.log("Retrospectiva seleccionada:", retroToLoad);
  
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
      if (retrospective.votes[currentUser.email]) {
        setHasVoted(true);
      }
    }
  }, [retrospective, currentUser]);

  const handleAddAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (retrospective.closed) {
      alert('La retrospectiva está cerrada. No se pueden agregar nuevas acciones.');
      return;
    }
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

    // Actualiza la retrospectiva en localStorage
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
    setActionText('');
  };

  const handleVote = (actionId: string) => {
    if (retrospective.closed) {
      alert('La retrospectiva está cerrada. No se pueden emitir votos.');
      return;
    }
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

    // Actualiza la retrospectiva en el array y en localStorage
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
    setHasVoted(true);
  };

  // Ejemplo de mapeo de preguntas (puedes ajustarlo según tus necesidades)
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

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  const handleCloseRetrospective = () => {
    if (!currentUser) return;
    // Solo el Scrum Master (creador) puede cerrar la retrospectiva
    if (currentUser.email !== retrospective.createdBy) {
      alert('No tienes permiso para cerrar esta retrospectiva.');
      return;
    }
    const updatedRetro = {
      ...retrospective,
      closed: true
    };

    // Actualiza la retrospectiva en el array y en localStorage
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
      <p>
        <strong>Grupo:</strong> {retrospective.assignedGroup}
      </p>
      {retrospective.fsh && (
        <p>
          FSH: <span style={{ color: 'blue' }}>{retrospective.fsh}</span>
        </p>
      )}

      {retrospective.closed && (
        <p style={{ color: 'red' }}><strong>Esta retrospectiva está cerrada.</strong></p>
      )}

      {/* Botón para cerrar la retrospectiva (solo visible para el Scrum Master creador y si aún está abierta) */}
      {currentUser?.email && retrospective?.createdBy && !retrospective?.closed && (
  currentUser.email.trim().toLowerCase() === retrospective.createdBy.trim().toLowerCase() ? (
      <button onClick={handleCloseRetrospective} style={{ backgroundColor: 'red', color: 'white', marginBottom: '1rem' }}>
      Cerrar Retrospectiva
      </button>
      ) : (
    <p>No tienes permiso para cerrar esta retrospectiva.</p>
      )
    )}


      <hr />
      <h3>Agregar Acción</h3>
      <form onSubmit={handleAddAction}>
        <input 
          type="text"
          placeholder="Escribe tu acción"
          value={actionText}
          onChange={e => setActionText(e.target.value)}
          disabled={retrospective.closed} // Deshabilitado si está cerrada
        />
        <button type="submit" disabled={retrospective.closed}>
          Agregar Acción
        </button>
      </form>

      <hr />
      <h3>Acciones Agregadas</h3>
      {retrospective.actions && retrospective.actions.length > 0 ? (
        <ul>
          {retrospective.actions.map((action: any) => (
            <li key={action.id}>
              {action.text} <em>({action.createdBy})</em> - Votos: {action.voteCount}
              {!hasVoted && currentUser && !retrospective.closed && (
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
          <h3>Preguntas:</h3>
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
