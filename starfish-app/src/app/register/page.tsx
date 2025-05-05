'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Register.module.css';
import Swal from 'sweetalert2';

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
      Swal.fire({
        text: "El email ingresado ya existe en la plataforma.",
        icon: "error",
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'Cerrar',
        scrollbarPadding: false
      });
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
    Swal.fire({
      text: "Registro exitoso.",
      icon: "success",
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Cerrar',
      scrollbarPadding: false
    });
    router.push('/login');
  };
    return (
      <div className={styles.registerContainer}>
        <div className={styles.registerCard}>
          <Image
            src="/img/starfish.png"
            alt="Starfish Logo"
            width={140}
            height={140}
            className={styles.logo}
          />
  
          <h1 className={styles.mainTitle}>Ga‑Starfish</h1>
          <h2 className={styles.registerTitle}>Registrarse</h2>
  
          <form className={styles.registerForm} onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={styles.inputField}
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
            <div>
            <h3 className={styles.selectUserType}>Tipo de Usuario:</h3>
            <select
              className={styles.customSelect}
              value={userType}
              onChange={e => setUserType(e.target.value)}
              required
              aria-label='Selecciona un tipo de usuario'
            >
              <option value="" disabled>Selecciona un tipo</option>
              <option value="admin">Administrador</option>
              <option value="user">Scrum Master o Desarrollador</option>
            </select>
            </div>
            <button type="submit" className={styles.btnRegister}>
              Registrarse
            </button>
          </form>
  
          <p className={styles.loginText}>
            ¿Ya tienes una cuenta?{' '}
            <span
              className={styles.loginLink}
              onClick={() => router.push('/login')}
            >
              Iniciar sesión
            </span>
          </p>
        </div>
      </div>
    );
  }
