'use client'; 
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', 'false');
    router.push('/login');
  }

  return {
    handleLogout,
  };
}
