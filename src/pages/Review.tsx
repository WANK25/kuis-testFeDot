import useLastQuizResult from '../hooks/useLastQuizResult';

export default function Review() {
  const quizData = useLastQuizResult();
  if (!quizData) {
    return <div className="p-10">Loading review...</div>;
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[1000px] p-10">
        <h1 className="text-4xl font-bold mb-6">Review</h1>

        <div className="flex flex-col gap-8 border rounded-2xl">
          {quizData.questions.map((q, idx) => {
            const userAnswer = quizData.answers[idx];
            const allOptions = [
              ...q.incorrect_answers,
              q.correct_answer,
            ].sort();
            const isCorrect = userAnswer === q.correct_answer;

            return (
              <div key={idx} className="rounded-xl p-5">
                <p className="text-xl font-semibold mb-2">
                  {idx + 1}. {q.question}
                </p>
                <div className="flex flex-col gap-2">
                  {allOptions.map((opt) => {
                    const isUserAnswer = opt === userAnswer;
                    const isRightAnswer = opt === q.correct_answer;

                    return (
                      <div
                        key={opt}
                        className={`px-4 py-2 rounded-md border
                        ${isRightAnswer ? 'border-green-500 text-green-700 font-bold' : ''}
                        ${isUserAnswer && !isRightAnswer ? 'border-red-400 text-red-600 font-bold' : ''}
                      `}
                      >
                        {opt}
                      </div>
                    );
                  })}
                </div>

                <p
                  className={`mt-3 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}
                >
                  {isCorrect
                    ? 'Jawaban Benar'
                    : `Jawaban Salah. Jawaban benar: ${q.correct_answer}`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
