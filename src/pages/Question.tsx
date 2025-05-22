import { useQuizTimer } from '../components/question/hooks/use_quizTimer';
import { useEffect } from 'react';
import { useQuestion } from '../components/question/hooks/use_question';
import {
  AnswerOption,
  CardNumberQuiz,
  NextPrevious,
} from '../components/question';

import QuestionProps from '../types/interface_question';
import { showConfirmationAlert } from '../utils/popup';

export default function Question({ dataQuestions }: QuestionProps) {
  const {
    currentQuestionIndex,
    currentQuestion,
    allOptions,
    selectedOptions,
    handleOptionSelect,
    handleNext,
    handlePrevious,
    handleFinish,
    handleQuestionNavigation,
  } = useQuestion(dataQuestions);

  const { formattedTime, timeLeft } = useQuizTimer(60);

  const handleConfirmFinishQuiz = () => {
    showConfirmationAlert({
       title: 'Are you sure you want to submit the quiz?',
      message: ' Your answers will be submitted.',
      confirmText: 'Submit',
      cancelText: 'Cancel',
      onConfirm: () => {
        // Proses delete
        handleFinish();
        // Atau bisa juga panggil API, update state, dll
      },
    })
  }

  useEffect(() => {
    if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft]);

  if (!dataQuestions || dataQuestions.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        No questions available
      </div>
    );
  }

  const timeAlmostUp = timeLeft < 30;

  return (
    <div className="h-screen">
      <div className="h-full flex gap-4 py-5 px-10">
        {/* Sidebar */}
        <section className="p-4 bg-gray-300 h-fit w-[400px] flex flex-col gap-10 rounded-2xl">
          <div className="flex flex-col gap-1">
            <p
              className={`${timeAlmostUp ? 'text-red-500' : ''} text-3xl font-bold mt-2`}
            >
              Time left: {formattedTime}
            </p>
            <p className="font-light text-lg">
              Question {currentQuestionIndex + 1} of {dataQuestions.length}
            </p>
          </div>

          <CardNumberQuiz
            dataQuestions={dataQuestions}
            currentQuestionIndex={currentQuestionIndex}
            handleQuestionNavigation={handleQuestionNavigation}
            selectedOptions={selectedOptions}
          />
        </section>

        {/* Main content */}
        <section className="px-6 py-20 rounded-2xl border-2 shadow flex flex-col gap-10 flex-1">
          <h1 className="font-bold text-7xl text-black">
            QUIZ {currentQuestion?.category || 'Exam'}
          </h1>
          <h1 className="font-bold text-4xl text-black">
            {currentQuestion?.question || 'No question available'}
          </h1>

          <div className="flex flex-col gap-2">
            {allOptions.map((opt, index) => (
              <AnswerOption
                key={index}
                option={opt}
                isSelected={selectedOptions[currentQuestionIndex] === opt}
                onSelect={handleOptionSelect}
              />
            ))}
          </div>

          <div className="w-full h-full relative">
            <NextPrevious
              onNext={handleNext}
              onPrevious={handlePrevious}
              onFinish={handleConfirmFinishQuiz}
              showPrevious={currentQuestionIndex > 0}
              showNext={currentQuestionIndex < dataQuestions.length - 1}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
