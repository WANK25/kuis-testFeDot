import AnswerOptionReviewProps from '../types/interface_answerOptionQuiz';

export default function AnswerOptionReview({
  option,
  isSelected,
  isCorrect,
}: AnswerOptionReviewProps) {
  let bgColor = 'bg-white';
  if (isCorrect) bgColor = 'bg-green-200';
  else if (isSelected) bgColor = 'bg-red-200';

  return (
    <div className={`p-3 rounded-md ${bgColor} border`}>
      <p className="text-lg">{option}</p>
    </div>
  );
}
