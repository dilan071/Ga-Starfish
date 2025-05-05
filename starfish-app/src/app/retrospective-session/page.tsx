'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SidebarToggle from '../SidebarToggle';
import styles from './Retrospective-Session.module.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function RetrospectiveSessionPage() {
  const [retrospective, setRetrospective] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const [planActions, setPlanActions] = useState<any[]>([]);
  const [assignedMembers, setAssignedMembers] = useState<string[]>([]);
  const [responsible, setResponsible] = useState('');
  const [planAction, setPlanAction] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [timeUnit, setTimeUnit] = useState('Horas');

  const [hasVoted, setHasVoted] = useState(false);
  const [actionText, setActionText] = useState('');

  const searchParams = useSearchParams();
  const retrospectiveId = searchParams.get('id');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
    const retros = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    const retro = retros.find((r: any) => r.id === retrospectiveId);
    if (retro && user && retro.assignedGroup === user.assignedGroup) {
      setRetrospective(retro);
      setIsAuthorized(true);
      setPlanActions(retro.planActions || []);
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      setAssignedMembers(
        users.filter((u: any) => u.assignedGroup === retro.assignedGroup).map((u: any) => u.email)
      );
      // cargar acciones y votos existentes
      if (retro.votes && retro.votes[user.email]) setHasVoted(true);
    }
  }, [retrospectiveId]);

  const handleAddPlanAction = () => {
    if (!responsible || !planAction.trim() || !estimatedTime.trim()) {
      Swal.fire({ text: 'Completa todos los campos.', icon: 'error', confirmButtonColor: '#ef4444' });
      return;
    }
    const newPlan = {
      id: Date.now().toString(), responsible, action: planAction.trim(), estimatedTime: Number(estimatedTime), timeUnit
    };
    const updated = [...planActions, newPlan];
    setPlanActions(updated);
    // persistir
    const updatedRetro = { ...retrospective, planActions: updated };
    const all = JSON.parse(localStorage.getItem('retrospectives') || '[]');
    localStorage.setItem(
      'retrospectives',
      JSON.stringify(all.map((r: any) => r.id === retrospectiveId ? updatedRetro : r))
    );
    setRetrospective(updatedRetro);
    setResponsible(''); setPlanAction(''); setEstimatedTime(''); setTimeUnit('Horas');
  };

  const handleCloseRetrospective = () => {
    if (!currentUser) return;
    if (currentUser.email !== retrospective.createdBy) {
      Swal.fire({
        text: "No tienes permiso para cerrar esta retrospectiva.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
      return;
    }
    const updatedRetro = { ...retrospective, closed: true };
    const all = JSON.parse(localStorage.getItem("retrospectives") || "[]");
    localStorage.setItem(
      "retrospectives",
      JSON.stringify(
        all.map((r: any) =>
          r.id === retrospectiveId ? updatedRetro : r
        )
      )
    );
    setRetrospective(updatedRetro);
    Swal.fire({
      text: "Retrospectiva cerrada exitosamente.",
      icon: "success",
      confirmButtonColor: "#ef4444",
    });
  }; 


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

  const toggleQuestions = () => setShowQuestions(!showQuestions);

  if (!retrospective) return <div>No hay retrospectiva activa.</div>;
  if (!isAuthorized) return <div>No tienes permiso.</div>;

  

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src="/img/starfish.png"
            alt="Ga-Starfish Logo"
            className={styles.logoImage}
          />
          <span className={styles.projectName}>Ga-Starfish</span>
        </div>
        <h1 className={styles.pageTitle}>
          Retrospectiva
        </h1>
        <div className={styles.menuWrapper}>
          <SidebarToggle> </SidebarToggle>
        </div>
      </header>


      <section className={styles.sessionSection}>
        <div className={styles.infoGroup}>
          <p>
            <strong>Retrospectiva:</strong> {retrospective.title}
          </p>
          <p>
              <strong>Descripción:</strong> {retrospective.description}
          </p>
          <p>
            <strong>Grupo:</strong> {retrospective.assignedGroup}
          </p>
          {retrospective.fsh && (
            <p>
              <strong>FSH:</strong> {retrospective.fsh}
            </p>
          )}
          <p>
            <strong>Estado:</strong> {retrospective.closed ? 'Cerrada' : 'Abierta'}
        </p>
        </div>
        
        {currentUser.email === retrospective.createdBy &&
          !retrospective.closed && (
            <button
              onClick={handleCloseRetrospective}
              className={styles.enterBtn}
            >
              Cerrar Retrospectiva
            </button>
          )}

        <div className={styles.infoGroup}>
          <h3>
            Técnica Starfish:
          </h3>
        </div>

        <div className={styles.buttonGroup}>
          <Link 
            href={`/more-of/${retrospective.id}`} 
            className={styles.actionBtn}
          >
            Hacer más
          </Link>
          <Link 
            href={`/less-of/${retrospective.id}`} 
            className={styles.actionBtn}
          >
            Hacer menos
          </Link>
          <Link 
            href={`/keep-doing/${retrospective.id}`} 
            className={styles.actionBtn}
          >
            Continuar haciendo
          </Link>
          <Link 
            href={`/stop-doing/${retrospective.id}`} 
            className={styles.actionBtn}
          >
            Dejar de hacer
          </Link>
          <Link 
            href={`/start-doing/${retrospective.id}`} 
            className={styles.actionBtn}
          >
            Comenzar a hacer
          </Link>
        </div>


        {/* Plan de Acción */}
        <div className={styles.planSection}>
          <h3>Plan de Acción:</h3>
          {currentUser.email === retrospective.createdBy && !retrospective.closed && (
            <div className={styles.planForm}>
              <select value={responsible} onChange={e => setResponsible(e.target.value)}>
                <option value="">Responsable</option>
                {assignedMembers.map(em => (
                  <option key={em} value={em}>{em}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Acción"
                value={planAction}
                onChange={e => setPlanAction(e.target.value)}
              />
              <input
                type="number"
                placeholder="Tiempo estimado"
                min="1"
                value={estimatedTime}
                onChange={e => setEstimatedTime(e.target.value)}
              />
              <select value={timeUnit} onChange={e => setTimeUnit(e.target.value)}>
                {['Minutos','Horas','Días','Semanas'].map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
              <button onClick={handleAddPlanAction} className={styles.enterBtn}>
                Agregar Acción
              </button>
            </div>
          )}
          <table className={styles.planTable}>
            <thead>
              <tr>
                <th>Responsable</th>
                <th>Acción</th>
                <th>Estimado</th>
              </tr>
            </thead>
            <tbody>
              {planActions.map(pa => (
                <tr key={pa.id}>
                  <td>{pa.responsible}</td>
                  <td>{pa.action}</td>
                  <td>{pa.estimatedTime} {pa.timeUnit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button onClick={toggleQuestions} className={styles.questionToggleBtn}>
          {showQuestions ? 'Ocultar Preguntas' : 'Ver Preguntas'}
        </button>

        {showQuestions && retrospective.fsh && (
          <div className={styles.questionsList}>
            <h3>Preguntas para {retrospective.fsh}:</h3>
            <ul>
              {questionsMapping[retrospective.fsh]?.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}

