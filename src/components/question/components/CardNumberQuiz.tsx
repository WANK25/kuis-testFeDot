import React from 'react';
import CardNumberQuizProps from '../types/interface_cardNumberQuiz';

export default function CardNumberQuiz<T>({
  dataQuestions,
  currentQuestionIndex,
  selectedOptions,
  handleQuestionNavigation,
}: CardNumberQuizProps<T>) {
  return (
    <div className="w-full grid grid-cols-4 gap-2 p-4 rounded">
      {dataQuestions.map((_, index) => (
        <button
          key={index}
          className={`w-20 h-20 text-xl border-2 rounded-md ${
            currentQuestionIndex === index
              ? 'bg-blue-500 text-white'
              : selectedOptions[index]
                ? 'bg-green-200'
                : 'bg-white border-gray-300'
          }`}
          onClick={() => handleQuestionNavigation(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
