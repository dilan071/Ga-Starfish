'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';
import styles from '../login/Login.module.css';

export default function RecoverPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleRecover = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === trimmedEmail);

    if (!user) {
      setError('Este correo no está registrado.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Se han enviado las instrucciones a tu correo.');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard} style={{ position: 'relative' }}>
        {/* Flecha personalizada */}
        <button
          onClick={() => router.push('/login')}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'transparent',
            border: 'none',
            fontSize: '2rem',
            color: '#e53e3e', 
            cursor: 'pointer',
            transition: 'color 0.3s ease',
          }}
          aria-label="Volver"
          onMouseEnter={(e) => (e.currentTarget.style.color = '#e53e3e')} // Cambio de color al pasar el mouse
          onMouseLeave={(e) => (e.currentTarget.style.color = '#e53e3e')} // Restaura color al salir
        >
          <FiArrowLeft />
        </button>

        <Image
          src="/img/starfish.png"
          alt="Starfish Logo"
          width={140}
          height={140}
          className={styles.logo}
        />
        <h1 className={styles.mainTitle}>Ga‑Starfish</h1>
        <h2 className={styles.loginTitle}>Recuperar contraseña</h2>

        <form className={styles.loginForm} onSubmit={handleRecover}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          {success && <p style={{ color: 'green', marginBottom: '10px' }}>{success}</p>}

          <button type="submit" className={styles.btnLogin}>
            Enviar instrucciones
          </button>
        </form>

        <p className={styles.signupText}>
          ¿Recordaste tu contraseña?{' '}
          <span
            className={styles.signupLink}
            onClick={() => router.push('/login')}
          >
            Volver a iniciar sesión
          </span>
        </p>
      </div>
    </div>
  );
}
