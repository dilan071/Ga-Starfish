'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import SidebarToggle from '../../SidebarToggle';
import styles from './moreOf.module.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function MoreOfPage() {
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
      '¿Qué prácticas de comunicación deberíamos potenciar más para asegurar claridad y alineación en el equipo?',
      '¿En qué momentos la comunicación fue especialmente efectiva y cómo podemos replicar esos patrones con mayor frecuencia?'
    ],
    'Compromiso': [
      '¿Qué dinámicas de compromiso deberíamos fomentar más para motivar a cada integrante?',
      '¿Cómo podemos incrementar más la participación individual y colectiva en las actividades clave del sprint?'
    ],
    'Colaboración': [
      '¿En qué tareas colaborativas deberíamos involucrarnos más para maximizar el trabajo en equipo?',
      '¿Qué oportunidades de colaboración deberíamos aprovechar con mayor frecuencia para impulsar los resultados?'
    ],
    'Motivación': [
      '¿Qué iniciativas motivacionales deberíamos implementar más para mantener el entusiasmo del equipo?',
      '¿Cómo podríamos aumentar más el reconocimiento de logros para elevar la motivación diaria?'
    ],
    'Satisfacción laboral': [
      '¿Qué elementos del trabajo deberíamos reforzar más para mejorar la satisfacción personal?',
      '¿Qué cambios en dinámicas o herramientas laborales deberíamos adoptar con mayor frecuencia para incrementar el bienestar?'
    ],
    'Inteligencia emocional': [
      '¿Qué prácticas de gestión emocional deberíamos aplicar más para manejar eficazmente el estrés y los conflictos?',
      '¿Cómo podríamos fomentar aún más la empatía y el respeto mutuo en nuestro día a día?'
    ],
    'Cohesión de equipo': [
      '¿Qué actividades de equipo deberíamos repetir o ampliar más para fortalecer la unión y la confianza?',
      '¿Cómo podríamos promover de manera más constante la alineación entre los miembros?'
    ],
    'Empatía y relaciones': [
      '¿En qué situaciones deberíamos practicar más la empatía para mejorar nuestras relaciones internas?',
      '¿Qué acciones podríamos tomar con mayor frecuencia para gestionar positivamente las diferencias interpersonales?'
    ],
    'Liderazgo': [
      '¿Qué estilos o prácticas de liderazgo deberíamos reforzar más para facilitar la toma de decisiones?',
      '¿Cómo podríamos ofrecer más oportunidades de liderazgo según las fortalezas de cada miembro?'
    ],
    'Autonomía': [
      '¿En qué tareas deberíamos delegar más autonomía para agilizar nuestro flujo de trabajo?',
      '¿Cómo podríamos establecer con mayor claridad los límites de autonomía para mejorar la alineación?'
    ],
    'Innovación': [
      '¿Qué iniciativas innovadoras deberíamos impulsar más durante los sprints?',
      '¿Cómo podríamos fomentar más la experimentación y creatividad dentro del equipo?'
    ],
    'Habilidades y experiencia en el desarrollo de software': [
      '¿En qué áreas técnicas deberíamos invertir más tiempo de capacitación para fortalecer al equipo?',
      '¿Cómo podríamos promover con mayor frecuencia el intercambio de conocimientos técnicos entre nosotros?'
    ],
    'Habilidades y experiencia en la gestión de proyectos de desarrollo de software': [
      '¿Qué prácticas de gestión de proyectos deberíamos ampliar más para mejorar la planificación y seguimiento?',
      '¿Cómo podríamos aprovechar más la experiencia previa para gestionar riesgos y recursos de forma efectiva?'
    ],
  };
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);

    const retros = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const retro = retros.find((r: any) => r.id === id);
    if (!retro) { router.back(); return; }

    setRetrospective(retro);
    setIdeas(retro.moreOf || []);

    const votesArr: string[] = retro.moreOfVotes?.[user?.email] || [];
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
    const updatedRetro = { ...retrospective, moreOf: [...(retrospective.moreOf || []), newIdea], moreOfVotes: retrospective.moreOfVotes || {} };
    const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const updatedAll = stored.map((r: any) => r.id === id ? updatedRetro : r);
    localStorage.setItem('retrospectives', JSON.stringify(updatedAll));

    setRetrospective(updatedRetro);
    setIdeas(updatedRetro.moreOf);
    setIdeaText('');
  };

  const handleVoteIdea = (ideaId: string) => {
    if (!retrospective || !currentUser) return;
    if (retrospective.closed) { Swal.fire({ text: 'La retrospectiva está cerrada, no se pueden emitir votos.', icon: 'error', confirmButtonColor: '#ef4444', iconColor: '#ef4444', confirmButtonText: 'Cerrar', scrollbarPadding: false }); return; }
    if (userVotes.has(ideaId)) { Swal.fire({ text: 'Ya has votado esta idea.', icon: 'error', confirmButtonColor: '#ef4444', iconColor: '#ef4444', confirmButtonText: 'Cerrar', scrollbarPadding: false }); return; }

    const updatedIdeas = ideas.map(idea => idea.id === ideaId ? { ...idea, voteCount: idea.voteCount + 1 } : idea);
    const updatedVotesSet = new Set(userVotes); updatedVotesSet.add(ideaId);
    const updatedVotesObj = { ...(retrospective.moreOfVotes || {}), [currentUser.email]: Array.from(updatedVotesSet) };
    const updatedRetro = { ...retrospective, moreOf: updatedIdeas, moreOfVotes: updatedVotesObj };
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
        <h1 className={styles.pageTitle}>Hacer Más</h1>
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
