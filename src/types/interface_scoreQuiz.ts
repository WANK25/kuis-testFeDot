export interface ScoreQuizProps<T = unknown> {
  id: string;
  timestamp: string;
  score: number;
  questions: T[];
  answers: Record<number, string>;
  totalQuiz: number;
  correctAnswer: number;
  incorrectAnswer: number;
  totalAnswered: number;
}
