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
      alert(`FSH seleccionado: ${selectedFSH}`);
      router.push('/view-questions');
    }
  };

  return (
    <div>
      <h2>Seleccionar FSH</h2>
      <select value={selectedFSH} onChange={(e) => setSelectedFSH(e.target.value)}>
        <option value="">-- Selecciona un FSH --</option>
        <option value="FSH1">FSH1</option>
        <option value="FSH2">FSH2</option>
        <option value="FSH3">FSH3</option>
      </select>
      <button onClick={handleSelect}>Seleccionar</button>
    </div>
  );
}
