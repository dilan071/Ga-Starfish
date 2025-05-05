'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import SidebarToggle from '../../SidebarToggle';
import styles from './keepDoing.module.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function KeepDoingPage() {
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
      '¿Qué prácticas de comunicación deberíamos seguir haciendo para mantener la claridad y la transparencia?',
      '¿Qué canales o formatos han sido efectivos y deberíamos continuar utilizando en futuros sprints?'
    ],
    'Compromiso': [
      '¿Qué dinámicas de compromiso deberíamos seguir fomentando para mantener al equipo motivado?',
      '¿Qué acciones colaborativas han generado mayor involucramiento y deberíamos continuar implementando?'
    ],
    'Colaboración': [
      '¿En qué tareas colaborativas deberíamos seguir participando para maximizar el valor entregado?',
      '¿Qué ritmos o espacios de colaboración han resultado útiles y debemos mantener?'
    ],
    'Motivación': [
      '¿Qué iniciativas motivacionales debemos seguir haciendo para sostener el entusiasmo del equipo?',
      '¿Qué formas de reconocimiento han tenido un buen impacto y debemos seguir practicando?'
    ],
    'Satisfacción laboral': [
      '¿Qué aspectos del entorno de trabajo deberíamos seguir promoviendo para aumentar la satisfacción?',
      '¿Qué herramientas o dinámicas han mejorado el bienestar y debemos continuar usando?'
    ],
    'Inteligencia emocional': [
      '¿Qué prácticas de gestión emocional debemos seguir aplicando para manejar el estrés de forma saludable?',
      '¿Qué formas de empatía y apoyo mutuo han sido valiosas y debemos mantener?'
    ],
    'Cohesión de equipo': [
      '¿Qué actividades de equipo hemos disfrutado y deberíamos seguir haciendo para fortalecer la unión?',
      '¿Qué rituales o encuentros han fomentado la confianza y debemos mantener en el calendario?'
    ],
    'Empatía y relaciones': [
      '¿En qué situaciones hemos mostrado empatía con éxito y debemos seguir haciéndolo?',
      '¿Qué acciones de cuidado de relaciones interpersonales han funcionado y debemos continuar practicando?'
    ],
    'Liderazgo': [
      '¿Qué estilos o prácticas de liderazgo han apoyado al equipo y debemos seguir aplicando?',
      '¿Qué oportunidades de delegación de liderazgo han sido beneficiosas y debemos mantener?'
    ],
    'Autonomía': [
      '¿En qué áreas hemos dado autonomía al equipo y debemos seguir haciéndolo para agilizar el trabajo?',
      '¿Qué decisiones hemos dejado en manos del equipo y debemos continuar permitiendo?'
    ],
    'Innovación': [
      '¿Qué experimentos o pruebas de concepto han aportado valor y debemos seguir explorando?',
      '¿Qué espacios de creatividad hemos mantenido y debemos continuar promoviendo?'
    ],
    'Habilidades y experiencia en el desarrollo de software': [
      '¿Qué prácticas de desarrollo técnico han funcionado bien y debemos seguir aplicando?',
      '¿Qué iniciativas de pairing o code review debemos mantener para compartir conocimiento?'
    ],
    'Habilidades y experiencia en la gestión de proyectos de desarrollo de software': [
      '¿Qué prácticas de planificación y seguimiento han sido efectivas y debemos continuar?',
      '¿Qué lecciones aprendidas de gestión hemos implementado con éxito y debemos seguir usando?'
    ],
  };
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);

    const retros = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const retro = retros.find((r: any) => r.id === id);
    if (!retro) {
      router.back();
      return;
    }

    setRetrospective(retro);
    setIdeas(retro.keepDoing || []);

    const votesArr: string[] = retro.keepDoingVotes?.[user?.email] || [];
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
      keepDoing: [...(retrospective.keepDoing || []), newIdea],
      keepDoingVotes: retrospective.keepDoingVotes || {}
    };

    const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const updatedAll = stored.map((r: any) => r.id === id ? updatedRetro : r);
    localStorage.setItem('retrospectives', JSON.stringify(updatedAll));

    setRetrospective(updatedRetro);
    setIdeas(updatedRetro.keepDoing);
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
      ...(retrospective.keepDoingVotes || {}),
      [currentUser.email]: Array.from(updatedVotesSet)
    };
    const updatedRetro = { ...retrospective, keepDoing: updatedIdeas, keepDoingVotes: updatedVotesObj };

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
          <h1 className={styles.pageTitle}>Seguir Haciendo</h1>
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
  
