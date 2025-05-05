'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import SidebarToggle from '../../SidebarToggle';
import styles from './startDoing.module.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function StartDoingPage() {
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
      '¿Qué prácticas de comunicación deberíamos empezar a hacer para compartir el estado de las tareas de manera oportuna?',
      '¿Qué nuevos canales o formatos deberíamos empezar a usar para mejorar la claridad de los mensajes?'
    ],
    'Compromiso': [
      '¿Qué rituales de compromiso deberíamos empezar a hacer para fortalecer la responsabilidad individual?',
      '¿Qué sesiones de feedback deberíamos empezar a realizar para mantener el compromiso activo?'
    ],
    'Colaboración': [
      '¿Qué espacios de trabajo colaborativo deberíamos empezar a crear para facilitar la interacción?',
      '¿Qué herramientas de colaboración deberíamos empezar a adoptar para mejorar la eficiencia?'
    ],
    'Motivación': [
      '¿Qué tipos de reconocimiento deberíamos empezar a hacer para inspirar al equipo?',
      '¿Qué actividades de bienestar deberíamos empezar a incorporar para aumentar la motivación?'
    ],
    'Satisfacción laboral': [
      '¿Qué prácticas de balance entre vida y trabajo deberíamos empezar a implementar para mejorar la satisfacción?',
      '¿Qué mejoras en el entorno laboral deberíamos empezar a introducir para elevar el bienestar?'
    ],
    'Inteligencia emocional': [
      '¿Qué sesiones de reflexión emocional deberíamos empezar a programar para manejar el estrés?',
      '¿Qué dinámicas de empatía deberíamos empezar a practicar para fortalecer las relaciones?'
    ],
    'Cohesión de equipo': [
      '¿Qué actividades de team building deberíamos empezar a organizar para aumentar la cohesión?',
      '¿Qué rituales de alineación deberíamos empezar a establecer para reforzar la confianza?'
    ],
    'Empatía y relaciones': [
      '¿Qué espacios de escucha activa deberíamos empezar a habilitar para mejorar las relaciones?',
      '¿Qué prácticas de apoyo interpersonal deberíamos empezar a desarrollar para fomentar la empatía?'
    ],
    'Liderazgo': [
      '¿Qué oportunidades de liderazgo rotativo deberíamos empezar a implementar para diversificar la toma de decisiones?',
      '¿Qué prácticas de mentoría deberíamos empezar a ofrecer para potenciar las habilidades de liderazgo?'
    ],
    'Autonomía': [
      '¿Qué responsabilidades deberíamos empezar a delegar para aumentar la autonomía del equipo?',
      '¿Qué decisiones deberíamos empezar a descentralizar para agilizar el proceso?'
    ],
    'Innovación': [
      '¿Qué espacios de experimentación deberíamos empezar a habilitar para impulsar la creatividad?',
      '¿Qué métodos de ideación deberíamos empezar a usar para generar más propuestas innovadoras?'
    ],
    'Habilidades y experiencia en el desarrollo de software': [
      '¿Qué talleres técnicos deberíamos empezar a organizar para fortalecer nuestras habilidades?',
      '¿Qué prácticas de pairing deberíamos empezar a incorporar para compartir experiencias?'
    ],
    'Habilidades y experiencia en la gestión de proyectos de desarrollo de software': [
      '¿Qué métodos de planificación ágil deberíamos empezar a adoptar para mejorar la gestión?',
      '¿Qué métricas de seguimiento deberíamos empezar a definir para evaluar el desempeño del proyecto?'
    ],
  };
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);

    const retros = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const retro = retros.find((r: any) => r.id === id);
    if (!retro) { router.back(); return; }

    setRetrospective(retro);
    setIdeas(retro.startDoing || []);

    const votesArr: string[] = retro.startDoingVotes?.[user?.email] || [];
    setUserVotes(new Set(votesArr));
  }, [id, router]);

  const handleAddIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!retrospective) return;
    if (retrospective.closed) {
      Swal.fire({ text: 'La retrospectiva está cerrada, no se pueden agregar nuevas ideas.', icon: 'error', confirmButtonColor: '#ef4444', iconColor: '#ef4444', confirmButtonText: 'Cerrar', scrollbarPadding: false });
      return;
    }
    if (!ideaText.trim()) return;

    const newIdea = { id: Date.now().toString(), text: ideaText.trim(), createdBy: currentUser?.email || 'desconocido', voteCount: 0 };
    const updatedRetro = { ...retrospective, startDoing: [...(retrospective.startDoing || []), newIdea], startDoingVotes: retrospective.startDoingVotes || {} };
    const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const updatedAll = stored.map((r: any) => r.id === id ? updatedRetro : r);
    localStorage.setItem('retrospectives', JSON.stringify(updatedAll));

    setRetrospective(updatedRetro);
    setIdeas(updatedRetro.startDoing);
    setIdeaText('');
  };

  const handleVoteIdea = (ideaId: string) => {
    if (!retrospective || !currentUser) return;
    if (retrospective.closed) { Swal.fire({ text: 'La retrospectiva está cerrada, no se pueden emitir votos.', icon: 'error', confirmButtonColor: '#ef4444', iconColor: '#ef4444', confirmButtonText: 'Cerrar', scrollbarPadding: false }); return; }
    if (userVotes.has(ideaId)) { Swal.fire({ text: 'Ya has votado esta idea.', icon: 'error', confirmButtonColor: '#ef4444', iconColor: '#ef4444', confirmButtonText: 'Cerrar', scrollbarPadding: false }); return; }

    const updatedIdeas = ideas.map(idea => idea.id === ideaId ? { ...idea, voteCount: idea.voteCount + 1 } : idea);
    const updatedVotesSet = new Set(userVotes); updatedVotesSet.add(ideaId);
    const updatedVotesObj = { ...(retrospective.startDoingVotes || {}), [currentUser.email]: Array.from(updatedVotesSet) };
    const updatedRetro = { ...retrospective, startDoing: updatedIdeas, startDoingVotes: updatedVotesObj };
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
        <h1 className={styles.pageTitle}>Empezar a Hacer</h1>
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
              <button onClick={() => handleVoteIdea(idea.id)} 
              className={`${styles.enterBtn} ${userVotes.has(idea.id) ? styles.votedBtn : ''}`} 
              disabled={userVotes.has(idea.id)}>
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
