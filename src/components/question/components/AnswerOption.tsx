import React from 'react';
import AnswerOptionProps from '../types/interface_answerOption';

function AnswerOption({ option, isSelected, onSelect }: AnswerOptionProps) {
  const id = `option-${option}`;

  return (
    <div className="w-full mb-2 pl-10 justify-center">
      <label
        htmlFor={id}
        className="flex items-center gap-10 cursor-pointer text-3xl text-black font-semibold"
      >
        <input
          type="radio"
          id={id}
          name="quiz-option"
          value={option}
          checked={isSelected}
          onChange={() => onSelect(option)}
          className="accent-blue-500 scale-200"
        />
        <span>{option}</span>
      </label>
    </div>
  );
}

export default AnswerOption;
