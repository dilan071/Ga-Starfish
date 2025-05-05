'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!u) {
      router.push('/login');
      return;
    }
    setCurrentUser(u);
    setPreview(u.avatar || null);
  }, [router]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!preview || !currentUser) return;
    const all = JSON.parse(localStorage.getItem('users') || '[]');
    const updated = all.map((u: any) =>
      u.email === currentUser.email ? { ...u, avatar: preview } : u
    );
    localStorage.setItem('users', JSON.stringify(updated));
    const me = { ...currentUser, avatar: preview };
    localStorage.setItem('currentUser', JSON.stringify(me));
    setCurrentUser(me);
    alert('Avatar guardado');
  };

  if (!currentUser)
    return <div className="p-6 text-center text-gray-600">Cargando perfil...</div>;

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">Mi Perfil</h2>
        <p className="text-center text-sm text-gray-700">
          <strong>Email:</strong> {currentUser.email}
        </p>

        <div className="flex justify-center">
          {preview ? (
            <img
              src={preview}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-600">
              Sin avatar
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />

        <button
          onClick={handleSave}
          disabled={!preview}
          className={`w-full py-2 px-4 rounded text-white font-semibold ${
            preview ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Guardar Avatar
        </button>
      </div>
    </div>
  );
}
