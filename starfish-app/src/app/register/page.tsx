'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Tipo de usuario: "admin" o "user"
  const [userType, setUserType] = useState('user');
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === trimmedEmail)) {
      alert('El usuario ya existe');
      return;
    }

    const newUser = {
      email: trimmedEmail,
      password: trimmedPassword,
      role: userType,      
      assignedGroup: null, 
      groupRole: null     
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso');
    router.push('/login');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
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
        <div>
          <label>Tipo de Usuario:</label><br />
          <select value={userType} onChange={e => setUserType(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">Usuario Normal</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
