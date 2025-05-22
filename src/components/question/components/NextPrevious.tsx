import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import { AiOutlineFileDone } from 'react-icons/ai';
import BaseButton from '../../../common/button/BaseButton';
import NextPreviousProps from '../types/interface_nextPrevious';

export default function NextPrevious({
  onPrevious,
  onNext,
  showNext,
  showPrevious,
  onFinish,
}: NextPreviousProps) {
  return (
    <div className="absolute w-full bottom-0 flex justify-between text-2xl font-medium">
      <BaseButton
        onClick={onPrevious}
        disabled={!showPrevious}
        textButton="Previous"
        icon={<FaAngleLeft />}
        reverse={true}
        className={
          !showPrevious
            ? 'cursor-not-allowed opacity-40'
            : 'cursor-pointer hover:opacity-40'
        }
      />

      {showNext && (
        <BaseButton
          onClick={onNext}
          textButton="Next"
          icon={<FaAngleRight />}
        />
      )}

      {!showNext && (
        <BaseButton
          onClick={onFinish}
          textButton="Submit"
          icon={<AiOutlineFileDone />}
        />
      )}
    </div>
  );
}
