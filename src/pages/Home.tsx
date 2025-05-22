import BaseButton from '../common/button/BaseButton';
import { useStartQuiz } from '../hooks/useStartQuiz';
import { showConfirmationAlert } from '../utils/popup';

export default function Home({ username }: { username: string }) {
  const { handlePlay } = useStartQuiz();
  const handleConfirmStartQuiz = () => {
      showConfirmationAlert({
         title: 'Start Quiz?',
      message: 'You will have 1 minute to complete the quiz.',

        confirmText: 'Start',
        cancelText: 'Cancel',
        onConfirm: () => {
          // Proses delete
          handlePlay();
          // Atau bisa juga panggil API, update state, dll
        },
      })
    }

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen flex flex-col gap-5 items-center justify-center text-4xl font-bold rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl text-center text-gray-700">
              Hallo<span className="text-blue-400"> {username}!</span>
            </h1>
            <h3 className="text-xl font-medium text-gray-700">
              Take the quiz to see how much you know!
            </h3>
          </div>
        </div>
        <BaseButton
          textButton="Start Quiz"
          className="bg-blue-400 text-white text-xl"
          onClick={handleConfirmStartQuiz}
        />
      </div>
    </div>
  );
}
