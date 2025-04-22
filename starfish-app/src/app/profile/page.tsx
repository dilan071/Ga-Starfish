'use client';
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  // Cargar usuario en sesión
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!u) {
      router.push('/login');
      return;
    }
    setCurrentUser(u);
    setPreview(u.avatar || null);
  }, [router]);

  // Leer fichero y crear base64
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Guardar avatar en localStorage
  const handleSave = () => {
    if (!preview || !currentUser) return;
    // Actualizar en users[]
    const all = JSON.parse(localStorage.getItem('users') || '[]');
    const updated = all.map((u: any) =>
      u.email === currentUser.email ? { ...u, avatar: preview } : u
    );
    localStorage.setItem('users', JSON.stringify(updated));
    // Actualizar currentUser
    const me = { ...currentUser, avatar: preview };
    localStorage.setItem('currentUser', JSON.stringify(me));
    setCurrentUser(me);
    alert('Avatar guardado');
  };

  if (!currentUser) return <div>Cargando perfil...</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Mi Perfil</h2>
      <p><strong>Email:</strong> {currentUser.email}</p>
      <div style={{ margin: '1rem 0' }}>
        {preview ? (
          <img
            src={preview}
            alt="Avatar"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
        ) : (
          <div style={{
            width: '100px', height: '100px', borderRadius: '50%',
            background: '#ccc', display: 'flex', alignItems: 'center',
            justifyContent: 'center'
          }}>
            Sin avatar
          </div>
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br /><br />
      <button onClick={handleSave} disabled={!preview}>
        Guardar Avatar
      </button>
    </div>
  );
}
