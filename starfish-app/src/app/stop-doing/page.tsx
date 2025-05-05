'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import SidebarToggle from '../../SidebarToggle';
import styles from './stopDoing.module.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function StopDoingPage() {
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
      '¿Qué prácticas de comunicación nos restaron eficiencia y deberíamos dejar de hacer?',
      '¿En qué momentos los canales o modos de comunicación resultaron redundantes o confusos y cómo podríamos eliminarlos?'
    ],
    'Compromiso': [
      '¿Qué dinámicas de compromiso no aportaron valor y deberíamos descontinuar?',
      '¿Qué actividades de involucramiento sobrecargaron al equipo y necesitamos dejar de programar?'
    ],
    'Colaboración': [
      '¿Qué reuniones colaborativas fueron improductivas y deberíamos dejar de convocar?',
      '¿Qué herramientas o procesos de colaboración resultaron innecesarios y deberíamos retirar?'
    ],
    'Motivación': [
      '¿Qué iniciativas motivacionales no generaron impacto y deberíamos dejar de implementar?',
      '¿Qué reconocimientos o incentivos saturaron al equipo y sería mejor discontinuar?'
    ],
    'Satisfacción laboral': [
      '¿Qué prácticas laborales generaron frustración y debemos dejar de hacer?',
      '¿Qué dinámicas de tareas afectaron negativamente el bienestar y deberíamos evitar?'
    ],
    'Inteligencia emocional': [
      '¿Qué reacciones impulsivas o contraproducentes deberíamos dejar de manifestar?',
      '¿Qué técnicas de gestión emocional resultaron ineficaces y debemos abandonar?'
    ],
    'Cohesión de equipo': [
      '¿Qué actividades de unión no contribuyeron a la cohesión y deberíamos dejar de planificar?',
      '¿Qué ejercicios de alineación generaron rigidez y debiéramos suprimir?'
    ],
    'Empatía y relaciones': [
      '¿Qué comportamientos disminuyeron la empatía y deberíamos dejar de repetir?',
      '¿Qué acciones en la gestión de diferencias interpersonales provocaron tensión y deberíamos evitar?'
    ],
    'Liderazgo': [
      '¿Qué prácticas de liderazgo centralizado deberíamos cesar para delegar mejor?',
      '¿Qué decisiones unilaterales resultaron perjudiciales y deberíamos dejar de tomar?'
    ],
    'Autonomía': [
      '¿Qué formas de micromanagement debemos dejar de ejercer?',
      '¿Qué restricciones innecesarias a la autonomía debiéramos eliminar?'
    ],
    'Innovación': [
      '¿Qué experimentos o enfoques fallidos deberíamos dejar de intentar?',
      '¿Qué procesos burocráticos inhibieron la creatividad y deberíamos suprimir?'
    ],
    'Habilidades y experiencia en el desarrollo de software': [
      '¿Qué prácticas técnicas obsoletas debemos dejar de aplicar?',
      '¿Qué sesiones de capacitación resultaron irrelevantes y debemos abandonar?'
    ],
    'Habilidades y experiencia en la gestión de proyectos de desarrollo de software': [
      '¿Qué reuniones de gestión no aportaron valor y deberíamos dejar de realizar?',
      '¿Qué métricas o indicadores resultaron inútiles y deberíamos dejar de medir?'
    ],
  };
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);

    const retros = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const retro = retros.find((r: any) => r.id === id);
    if (!retro) { router.back(); return; }

    setRetrospective(retro);
    setIdeas(retro.stopDoing || []);

    const votesArr: string[] = retro.stopDoingVotes?.[user?.email] || [];
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
    const updatedRetro = { ...retrospective, stopDoing: [...(retrospective.stopDoing || []), newIdea], stopDoingVotes: retrospective.stopDoingVotes || {} };
    const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const updatedAll = stored.map((r: any) => r.id === id ? updatedRetro : r);
    localStorage.setItem('retrospectives', JSON.stringify(updatedAll));

    setRetrospective(updatedRetro);
    setIdeas(updatedRetro.stopDoing);
    setIdeaText('');
  };

  const handleVoteIdea = (ideaId: string) => {
    if (!retrospective || !currentUser) return;
    if (retrospective.closed) { Swal.fire({ text: 'La retrospectiva está cerrada, no se pueden emitir votos.', icon: 'error', confirmButtonColor: '#ef4444', iconColor: '#ef4444', confirmButtonText: 'Cerrar', scrollbarPadding: false }); return; }
    if (userVotes.has(ideaId)) { Swal.fire({ text: 'Ya has votado esta idea.', icon: 'error', confirmButtonColor: '#ef4444', iconColor: '#ef4444', confirmButtonText: 'Cerrar', scrollbarPadding: false }); return; }

    const updatedIdeas = ideas.map(idea => idea.id === ideaId ? { ...idea, voteCount: idea.voteCount + 1 } : idea);
    const updatedVotesSet = new Set(userVotes); updatedVotesSet.add(ideaId);
    const updatedVotesObj = { ...(retrospective.stopDoingVotes || {}), [currentUser.email]: Array.from(updatedVotesSet) };
    const updatedRetro = { ...retrospective, stopDoing: updatedIdeas, stopDoingVotes: updatedVotesObj };
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
        <h1 className={styles.pageTitle}>Parar de Hacer</h1>
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
