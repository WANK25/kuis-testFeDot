interface QuestionData {
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default interface QuestionProps {
  dataQuestions: QuestionData[];
}
