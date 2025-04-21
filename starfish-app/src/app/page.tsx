'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/img/starfish.png"
          alt="Logo Starfish"
          width={140}
          height={140}
          className={styles.logo}
        />
        <h1 className={styles.title}>Ga‑Starfish</h1>
        <h2 className={styles.subtitle}>¡Bienvenido/a!</h2>

        <button
          className={styles.btn}
          onClick={() => router.push('/login')}
        >
          Iniciar sesión
        </button>

        <button
          className={styles.btn}
          onClick={() => router.push('/register')}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}
