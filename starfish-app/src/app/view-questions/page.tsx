// src/app/view-questions/page.tsx
'use client';
import { useState, useEffect } from 'react';

export default function ViewQuestions() {
  const [selectedFSH, setSelectedFSH] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);

  useEffect(() => {
    const fsh = localStorage.getItem('selectedFSH');
    if (fsh) {
      setSelectedFSH(fsh);
      if (fsh === 'Comunicación') {
        setQuestions([
          "¿En qué momentos del sprint la comunicación fue efectiva y cómo podemos replicarla en el futuro?",
          "¿Hubo situaciones donde la falta de claridad en la comunicación generó malentendidos? ¿Cómo podríamos evitarlo?"
        ]);
      } else if (fsh === 'Compromiso') {
        setQuestions([
          "¿Cómo percibimos el nivel de compromiso individual y colectivo durante el sprint? ¿Qué factores lo influyeron?",
          "¿Qué acciones concretas podríamos tomar para fortalecer el compromiso en los próximos sprints?"
        ]);
      } else if (fsh === 'Colaboración') {
        setQuestions([
          "¿En qué tareas o situaciones la colaboración entre el equipo fue clave para el éxito?",
          "¿Identificamos oportunidades donde una mayor colaboración hubiera acelerado o mejorado los resultados?"
        ]);
      } else if (fsh === 'Motivación') {
        setQuestions([
          "¿Qué aspectos del sprint aumentaron o disminuyeron la motivación del equipo? ¿Cómo podemos potenciarlos?",
          "¿Cómo podemos asegurar que las responsabilidades asignadas estén alineadas con los intereses y motivaciones individuales?"
        ]);
      } else if (fsh === 'Satisfacción laboral') {
        setQuestions([
          "¿Qué elementos del trabajo durante el sprint contribuyeron a su satisfacción personal?",
          "¿Qué cambios en la dinámica del equipo o en las tareas mejorarían la satisfacción general?"
        ]);
      } else if (fsh === 'Inteligencia emocional') {
        setQuestions([
          "¿Cómo manejamos los conflictos o situaciones de estrés durante el sprint? ¿Qué habilidades emocionales podríamos reforzar?",
          "¿De qué manera podemos fomentar un ambiente donde se priorice la empatía y el respeto mutuo?"
        ]);
      } else if (fsh === 'Cohesión de equipo') {
        setQuestions([
          "¿Qué actividades o dinámicas durante el sprint fortalecieron la unión y confianza entre los miembros del equipo? ¿Cómo podemos replicarlas?",
          "¿Hubo momentos en los que percibimos falta de alineación o desconexión en el equipo? ¿Qué acciones podrían ayudarnos a mejorar esto en futuros sprints?"
        ]);
      } else if (fsh === 'Empatía y relaciones interpersonales') {
        setQuestions([
          "¿En qué situaciones durante el sprint percibimos que la empatía facilitó la resolución de conflictos o mejoró la dinámica del equipo? ¿Cómo podemos promover más estos comportamientos?",
          "¿Hubo momentos en los que las diferencias interpersonales afectaron la colaboración? ¿Qué estrategias podríamos implementar para fortalecer las relaciones y la comprensión mutua?"
        ]);
      } else if (fsh === 'Liderazgo') {
        setQuestions([
          "¿El liderazgo durante el sprint facilitó la toma de decisiones? ¿Qué ajustes sugerirían?",
          "¿Cómo podemos distribuir roles de liderazgo para aprovechar las fortalezas de cada miembro?"
        ]);
      } else if (fsh === 'Autonomía') {
        setQuestions([
          "¿En qué tareas o decisiones durante el sprint el equipo sintió que tuvo suficiente autonomía para actuar con agilidad? ¿Cómo podemos replicar ese escenario en el futuro?",
          "¿Hubo momentos en los que la falta de claridad en los límites de autonomía generó confusión o retrasos? ¿Qué ajustes podríamos hacer para equilibrar libertad y alineación?"
        ]);
      } else if (fsh === 'Innovación') {
        setQuestions([
          "¿Qué oportunidades identificamos durante el sprint para probar enfoques o herramientas nuevas? ¿Cómo podemos priorizar la experimentación en futuros sprints?",
          "¿Hubo barreras (culturales, técnicas o de procesos) que limitaron la creatividad o la implementación de ideas innovadoras? ¿Cómo podríamos abordarlas?"
        ]);
      } else if (fsh === 'Habilidades y experiencia en el proceso de desarrollo de software') {
        setQuestions([
          "¿Las habilidades técnicas del equipo fueron suficientes para abordar los desafíos del sprint? ¿En qué áreas necesitamos capacitación?",
          "¿Cómo podemos compartir conocimientos entre los miembros para fortalecer las habilidades colectivas?"
        ]);
      } else if (fsh === 'Habilidades y experiencia en la gestión de proyectos de desarrollo de software') {
        setQuestions([
          "¿La planificación y seguimiento del sprint aprovecharon la experiencia previa del equipo? ¿Qué lecciones aplicaremos en el futuro?",
          "¿Identificamos brechas en la gestión de riesgos o recursos que debamos abordar con mayor experiencia?"
        ]);
      } else {
        setQuestions([
          "Pregunta 1 para FSH3",
          "Pregunta 2 para FSH3"
        ]);
      }
    }
  }, []);

  if (!selectedFSH) {
    return <div>No se ha seleccionado ningún FSH</div>;
  }

  return (
    <div>
      <h2>Preguntas:</h2>
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ul>
    </div>
  );
}
