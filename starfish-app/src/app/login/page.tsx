'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Login.module.css';


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
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <Image
          src="/img/starfish.png"
          alt="Starfish Logo"
          width={140}
          height={140}
          className={styles.logo}
        />

        <h1 className={styles.mainTitle}>Ga‑Starfish</h1>
        <h2 className={styles.loginTitle}>Iniciar sesión</h2>

        <form className={styles.loginForm} onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            placeholder="Correo electrónico"
            className={styles.inputField}
            onChange={e => setEmail(e.target.value)}
            required 
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.inputField}
            required
          />
          <a href="#" className={styles.forgotLink}>¿Olvidaste tu contraseña?</a>

          <button
            type="submit"
            className={styles.btnLogin}
          >
            Iniciar sesión
          </button>
        </form>

        <p className={styles.signupText}>
          ¿No tienes una cuenta?
          <span
            className={styles.signupLink}
            onClick={() => router.push('/register')}
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}
