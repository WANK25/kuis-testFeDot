// src/hooks/useStartQuiz.ts
import { useNavigate } from 'react-router-dom';

export function useStartQuiz() {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/quiz');
  };

  return { handlePlay };
}
