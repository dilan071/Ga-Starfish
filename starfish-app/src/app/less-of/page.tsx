'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import SidebarToggle from '../../SidebarToggle';
import styles from './lessOf.module.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function LessOfPage() {
  const { id } = useParams();
  const router = useRouter();

  const [retrospective, setRetrospective] = useState<any>(null);
  const [ideas, setIdeas] = useState<any[]>([]);
  const [ideaText, setIdeaText] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userVotes, setUserVotes] = useState<Set<string>>(new Set());
  const [showQuestions, setShowQuestions] = useState(false);

  const questionsMapping: { [key: string]: string[] } = {
    'Comunicación': [
      '¿Qué prácticas de comunicación deberíamos hacer menos para evitar la sobrecarga de información?',
      '¿En qué momentos la comunicación fue excesiva o innecesaria y cómo podríamos reducirla?'
    ],
    'Compromiso': [
      '¿Qué dinámicas de compromiso deberíamos disminuir para no dispersar nuestro enfoque?',
      '¿En qué actividades podríamos involucrarnos menos para optimizar el tiempo del equipo?'
    ],
    'Colaboración': [
      '¿En qué tareas colaborativas deberíamos invertir menos esfuerzo para evitar cuellos de botella?',
      '¿Qué formas de colaboración redundantes deberíamos minimizar para agilizar los procesos?'
    ],
    'Motivación': [
      '¿Qué iniciativas motivacionales deberíamos reducir para no saturar al equipo?',
      '¿En qué tipos de reconocimiento podríamos moderarnos para mantener su impacto?'
    ],
    'Satisfacción laboral': [
      '¿Qué tareas rutinarias deberíamos hacer menos para evitar la monotonía?',
      '¿Qué cambios en dinámica de trabajo podríamos disminuir para no afectar el bienestar?'
    ],
    'Inteligencia emocional': [
      '¿Qué reacciones emocionales deberíamos controlar más para evitar respuestas impulsivas?',
      '¿En qué prácticas de gestión emocional podríamos ser más moderados para no saturar al equipo?'
    ],
    'Cohesión de equipo': [
      '¿Qué actividades de unión deberíamos reducir para no sobrecargar la agenda?',
      '¿En qué intervenciones de alineación podríamos disminuir la frecuencia para preservar su efectividad?'
    ],
    'Empatía y relaciones': [
      '¿En qué situaciones deberíamos moderar nuestra intervención empática para no interferir?',
      '¿Qué acciones relacionadas con diferencias interpersonales deberíamos evitar para no generar tensión?'
    ],
    'Liderazgo': [
      '¿Qué estilos de liderazgo deberíamos practicar menos para no centralizar las decisiones?',
      '¿En qué momentos podríamos reducir nuestra asunción de liderazgo para incentivar la iniciativa individual?'
    ],
    'Autonomía': [
      '¿Qué tareas deberíamos controlar menos para otorgar más libertad al equipo?',
      '¿En qué decisiones podríamos intervenir menos para mejorar la autonomía?'
    ],
    'Innovación': [
      '¿Qué experimentaciones deberíamos posponer o reducir para no dispersar la atención?',
      '¿Qué iniciativas innovadoras podríamos dejar de lado para centrarnos en las esenciales?'
    ],
    'Habilidades y experiencia en el desarrollo de software': [
      '¿En qué áreas técnicas deberíamos invertir menos tiempo para enfocarnos en prioridades críticas?',
      '¿Qué actividades de intercambio de conocimientos podríamos hacer menos para no interrumpir el flujo de trabajo?'
    ],
    'Habilidades y experiencia en la gestión de proyectos de desarrollo de software': [
      '¿Qué prácticas de gestión deberíamos reducir para simplificar nuestros procesos?',
      '¿En qué aspectos de planificación y seguimiento podríamos recortar esfuerzos para ser más eficientes?'
    ],
  };
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);

    const retrospectives = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const retro = retrospectives.find((r: any) => r.id === id);
    if (!retro) {
      router.back();
      return;
    }

    setRetrospective(retro);
    setIdeas(retro.lessOf || []);

    const votesArr: string[] = retro.lessOfVotes?.[user?.email] || [];
    setUserVotes(new Set(votesArr));
  }, [id, router]);

  const handleAddIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!retrospective) return;
    if (retrospective.closed) {
      Swal.fire({
        text: 'La retrospectiva está cerrada, no se pueden agregar nuevas ideas.',
        icon: 'error',
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false
      });
      return;
    }
    if (!ideaText.trim()) return;

    const newIdea = {
      id: Date.now().toString(),
      text: ideaText.trim(),
      createdBy: currentUser?.email || 'desconocido',
      voteCount: 0
    };

    const updatedRetro = {
      ...retrospective,
      lessOf: [...(retrospective.lessOf || []), newIdea],
      lessOfVotes: retrospective.lessOfVotes || {}
    };

    const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const updatedAll = stored.map((r: any) => r.id === id ? updatedRetro : r);
    localStorage.setItem('retrospectives', JSON.stringify(updatedAll));

    setRetrospective(updatedRetro);
    setIdeas(updatedRetro.lessOf);
    setIdeaText('');
  };

  const handleVoteIdea = (ideaId: string) => {
    if (!retrospective || !currentUser) return;
    if (retrospective.closed) {
      Swal.fire({
        text: 'La retrospectiva está cerrada, no se pueden emitir votos.',
        icon: 'error',
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false
      });
      return;
    }
    if (userVotes.has(ideaId)) {
      Swal.fire({
        text: 'Ya has votado esta idea.',
        icon: 'error',
        confirmButtonColor: '#ef4444',
        iconColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false
      });
      return;
    }

    const updatedIdeas = ideas.map(idea =>
      idea.id === ideaId ? { ...idea, voteCount: idea.voteCount + 1 } : idea
    );
    const updatedVotesSet = new Set(userVotes);
    updatedVotesSet.add(ideaId);
    const updatedVotesObj = {
      ...(retrospective.lessOfVotes || {}),
      [currentUser.email]: Array.from(updatedVotesSet)
    };
    const updatedRetro = { ...retrospective, lessOf: updatedIdeas, lessOfVotes: updatedVotesObj };

    const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const updatedAll = stored.map((r: any) => r.id === id ? updatedRetro : r);
    localStorage.setItem('retrospectives', JSON.stringify(updatedAll));

    setIdeas(updatedIdeas);
    setRetrospective(updatedRetro);
    setUserVotes(updatedVotesSet);
  };

  const toggleQuestions = () => setShowQuestions(!showQuestions);

  if (!retrospective) return <div>No hay retrospectiva activa.</div>;


  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/img/starfish.png" alt="Ga-Starfish Logo" className={styles.logoImage} />
          <span className={styles.projectName}>Ga-Starfish</span>
        </div>
        <h1 className={styles.pageTitle}>Hacer Menos</h1>
        <div className={styles.menuWrapper}>
          <SidebarToggle> </SidebarToggle>
        </div>
      </header>

      <section className={styles.listSection}>
      <div style={{ padding: '0 2rem',}}>
      <Link href={`/retrospective-session?id=${id}`} className={styles.returnBtn}>
        ← Volver a Retrospectiva
      </Link>
      </div>
        <h2 className={styles.h2}>Proponer Ideas</h2>
        <form onSubmit={handleAddIdea} className={styles.ideaForm}>
          <label>
            <strong>Idea:</strong>
            <input
              type="text"
              placeholder='Ingresa una idea'
              value={ideaText}
              onChange={e => setIdeaText(e.target.value)}
              className={styles.ideaInput}
            />
          </label>
          <button type="submit" className={styles.enterBtn}>Agregar Idea</button>
        </form>

        <div className={styles.ideasGrid}>
          {ideas.map(idea => (
            <div key={idea.id} className={styles.retroCard}>
              <div className={styles.retroInfo}>
                <span><strong>{idea.createdBy}</strong> dijo:</span>
                <p>{idea.text}</p>
                <p>Votos: {idea.voteCount}</p>
              </div>
              <button
                onClick={() => handleVoteIdea(idea.id)}
                className={`${styles.enterBtn} ${userVotes.has(idea.id) ? styles.votedBtn : ''}`}
                disabled={userVotes.has(idea.id)}
              >
              Votar
            </button>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '2rem' }}>Preguntas</h2>
        <button onClick={toggleQuestions} className={styles.enterBtn}>
          {showQuestions ? 'Ocultar Preguntas' : 'Ver Preguntas'}
        </button>
        {showQuestions && retrospective.fsh && (
          <ul style={{ marginTop: '1rem' }}>
            {questionsMapping[retrospective.fsh]?.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
