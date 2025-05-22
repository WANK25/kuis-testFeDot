// src/hooks/useLastQuizResult.ts
import { useEffect, useState } from 'react';
import QuizResult from '../types/interface_review';

export default function useLastQuizResult() {
  const [quizData, setQuizData] = useState<QuizResult | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('quizHistory');
    if (savedData) {
      try {
        const parsedData: QuizResult[] = JSON.parse(savedData);
        const lastQuiz = parsedData[parsedData.length - 1];
        if (lastQuiz) {
          setQuizData(lastQuiz);
        }
      } catch (error) {
        console.error('Gagal parsing data quizHistory:', error);
      }
    }
  }, []);

  return quizData;
}
