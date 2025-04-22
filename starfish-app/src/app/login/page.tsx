'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === trimmedEmail && u.password === trimmedPassword);
    if (!user) {
      alert('Credenciales incorrectas');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');

    if (user.role === 'admin') {
      router.push('/members');
    } else {
      // Si el usuario normal aún no tiene grupo asignado, lo redirige a /invitation (lista de espera)
      if (!user.assignedGroup) {
        router.push('/invitation');
      } else {
        router.push('/dashboard');
      }
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label><br />
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
