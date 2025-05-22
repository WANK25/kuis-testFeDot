interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default interface QuizResult {
  questions: Question[];
  answers: Record<number, string>;
  score: number;
  totalAnswered: number;
  totalQuiz: number;
}
