// src/hooks/useLogin.ts
import { useNavigate } from 'react-router-dom';

export function useLogin(username: string) {
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('quizUser', username);
      navigate('/'); // Arahkan ke halaman utama
    }
  };

  return { handleLogin };
}
