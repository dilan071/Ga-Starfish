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
      if (fsh === 'FSH1') {
        setQuestions([
          "Pregunta 1 para FSH1",
          "Pregunta 2 para FSH1"
        ]);
      } else if (fsh === 'FSH2') {
        setQuestions([
          "Pregunta 1 para FSH2",
          "Pregunta 2 para FSH2"
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
      <h2>Preguntas para {selectedFSH}</h2>
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ul>
    </div>
  );
}
