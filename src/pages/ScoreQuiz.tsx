import BaseButton from '../common/button/BaseButton';
import { useNavigate } from 'react-router-dom';
import useLastScoreQuiz from '../hooks/useLastScoreQuiz';

export default function ScoreQuiz() {
  const {
    lastScore,
    totalQuestion,
    correctAnswer,
    incorrectAnswer,
    totalAnswered,
  } = useLastScoreQuiz();

  const navigate = useNavigate();

  const handleReview = () => {
    navigate('/review');
  };
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen flex flex-col gap-5 items-center justify-center text-4xl font-bold rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl">
            {lastScore !== null
              ? `Your Score: ${lastScore}/100`
              : 'No score available'}
          </h1>
          <h3 className="font-medium text-xl">
            {totalQuestion !== null
              ? `You answered ${correctAnswer} correctly, ${incorrectAnswer} incorrectly, out of ${totalAnswered} answered questions. Total questions: ${totalQuestion}.`
              : 'No score available'}
          </h3>
        </div>
        <div className="flex gap-4">
          <BaseButton
            textButton="Review"
            className="bg-blue-400 text-white text-xl"
            onClick={handleReview}
          />

          <BaseButton
            textButton="Back to Home"
            className="bg-green-400 text-white text-xl"
            onClick={handleBack}
          />
        </div>
      </div>
    </div>
  );
}
