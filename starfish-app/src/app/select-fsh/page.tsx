// src/app/select-fsh/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SelectFSH() {
  const [selectedFSH, setSelectedFSH] = useState('');
  const router = useRouter();

  const handleSelect = () => {
    if (selectedFSH) {
      localStorage.setItem('selectedFSH', selectedFSH);
      alert(`Factor social seleccionado: ${selectedFSH}`);
      router.push('/view-questions');
    }
  };

  return (
    <div>
      <h2>Seleccionar FSH</h2>
      <select value={selectedFSH} onChange={(e) => setSelectedFSH(e.target.value)}>
        <option value="">Ninguno</option>
        <option value="Comunicación">Comunicación</option>
        <option value="Compromiso<">Compromiso</option>
        <option value="Colaboración">Colaboración</option>
        <option value="Motivación">Motivación</option>
        <option value="Satisfacción laboral">Satisfacción laboral</option>
        <option value="Inteligencia emocional">Inteligencia emocional</option>
        <option value="Cohesión de equipo">Cohesión de equipo</option>
        <option value="Empatía y relaciones interpersonales">Empatía y relaciones interpersonales</option>
        <option value="Liderazgo">Liderazgo</option>
        <option value="Autonomía">Autonomía</option>
        <option value="Innovación">Innovación</option>
        <option value="Habilidades y experiencia en el proceso de desarrollo de software">Habilidades y experiencia en el proceso de desarrollo de software</option>
        <option value="Habilidades y experiencia en la gestión de proyectos de desarrollo de software">Habilidades y experiencia en la gestión de proyectos de desarrollo de software</option>
      </select>
      <button onClick={handleSelect}>Seleccionar</button>
    </div>
  );
}

