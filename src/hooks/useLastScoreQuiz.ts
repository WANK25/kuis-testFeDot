// src/hooks/useLastScoreQuiz.ts
import { useEffect, useState } from 'react';
import { ScoreQuizProps } from '../types/interface_scoreQuiz';

interface LastScoreState {
  lastScore: number | null;
  totalQuestion: number | null;
  correctAnswer: number | null;
  incorrectAnswer: number | null;
  totalAnswered: number | null;
}

export default function useLastScoreQuiz(): LastScoreState {
  const [state, setState] = useState<LastScoreState>({
    lastScore: null,
    totalQuestion: null,
    correctAnswer: null,
    incorrectAnswer: null,
    totalAnswered: null,
  });

  useEffect(() => {
    const history: ScoreQuizProps[] = JSON.parse(
      localStorage.getItem('quizHistory') || '[]',
    );
    const latest = history[history.length - 1];
    if (latest) {
      setState({
        lastScore: latest.score,
        totalQuestion: latest.totalQuiz,
        correctAnswer: latest.correctAnswer,
        incorrectAnswer: latest.incorrectAnswer,
        totalAnswered: latest.totalAnswered,
      });
    }
  }, []);

  return state;
}
