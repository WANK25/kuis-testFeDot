export default interface CardNumberQuizProps<T> {
  dataQuestions: Array<T>;
  currentQuestionIndex: number;
  selectedOptions: Record<number, string>;
  handleQuestionNavigation: (index: number) => void;
}
