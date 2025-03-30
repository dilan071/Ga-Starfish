// src/app/add-actions/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Category = 'empezar' | 'dejar' | 'hacerMas' | 'hacerMenos' | 'seguir';

const initialCategories: Record<Category, string[]> = {
  empezar: [],
  dejar: [],
  hacerMas: [],
  hacerMenos: [],
  seguir: [],
};

export default function AddActions() {
  const [categories, setCategories] = useState(initialCategories);
  const [action, setAction] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('empezar');
  const router = useRouter();

  useEffect(() => {
    const storedActions = localStorage.getItem('actions');
    if (storedActions) {
      setCategories(JSON.parse(storedActions));
    }
  }, []);

  const handleAddAction = () => {
    if (action.trim()) {
      const updated = {
        ...categories,
        [selectedCategory]: [...categories[selectedCategory], action.trim()]
      };
      setCategories(updated);
      localStorage.setItem('actions', JSON.stringify(updated));
      setAction('');
      alert('Acción agregada');
    }
  };

  const goToVoting = () => {
    router.push('/vote-actions');
  };

  return (
    <div>
      <h2>Agregar Acciones a la Retrospectiva</h2>
      <div>
        <label>Selecciona Categoría:</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value as Category)}
        >
          <option value="empezar">Empezar a hacer</option>
          <option value="dejar">Dejar de hacer</option>
          <option value="hacerMas">Hacer más</option>
          <option value="hacerMenos">Hacer menos</option>
          <option value="seguir">Seguir haciendo</option>
        </select>
      </div>
      <div>
        <label>Acción:</label><br/>
        <input 
          type="text" 
          value={action} 
          onChange={(e) => setAction(e.target.value)}
        />
      </div>
      <button onClick={handleAddAction}>Agregar Acción</button>
      <br/><br/>
      <button onClick={goToVoting}>Ir a Votación de Acciones</button>
    </div>
  );
}
