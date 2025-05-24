import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionData from '../types/interface_useQuestion';

export const useQuestion = (dataQuestions: QuestionData[]) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, string>
  >({});
  const [score, setScore] = useState<number>();

  const currentQuestion = dataQuestions[currentQuestionIndex];

  const allShuffledOptions = useMemo(() => {
    return dataQuestions.map((q) => {
      return shuffle([q.correct_answer, ...q.incorrect_answers]);
    });
  }, [dataQuestions]);

  const allOptions = allShuffledOptions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };
  function shuffle(arr: string[]) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  const handleNext = () => {
    if (currentQuestionIndex < dataQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };
  const navigate = useNavigate();

  const handleFinish = () => {
    const totalTrueAnswer = calculateScore();
    const totalIncorrectAnswer = calculateIncorrectAnswer();
    const finalScore = totalTrueAnswer * 5;
    const calculateTotalAnswered = totalTrueAnswer + totalIncorrectAnswer;

    const resultData = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      score: finalScore,
      correctAnswer: totalTrueAnswer,
      totalAnswered: calculateTotalAnswered,
      totalQuiz: dataQuestions.length,
      questions: dataQuestions,
      answers: selectedOptions,
      incorrectAnswer: totalIncorrectAnswer,
    };

    const existingHistory = JSON.parse(
      localStorage.getItem('quizHistory') || '[]',
    );
    existingHistory.push(resultData);

    localStorage.setItem('quizHistory', JSON.stringify(existingHistory));
    setScore(finalScore);
    navigate('/score');
  };

  const handleQuestionNavigation = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const calculateScore = () => {
    let score = 0;

    dataQuestions.forEach((question, index) => {
      const userAnswer = selectedOptions[index];
      if (userAnswer === question.correct_answer) {
        score += 1;
      }
    });

    return score;
  };

  const calculateIncorrectAnswer = () => {
    let incorrect = 0;

    dataQuestions.forEach((question, index) => {
      const userAnswer = selectedOptions[index];

      // Cek jika user menjawab dan jawabannya benar
      if (userAnswer && userAnswer !== question.correct_answer) {
        incorrect += 1;
      }
    });

    return incorrect;
  };

  return {
    currentQuestionIndex,
    currentQuestion,
    allOptions,
    selectedOptions,
    handleOptionSelect,
    handleNext,
    handlePrevious,
    handleFinish,
    handleQuestionNavigation,
    score,
  };
};
