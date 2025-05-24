import BaseButton from '../common/button/BaseButton';
import { useStartQuiz } from '../hooks/useStartQuiz';
import { showConfirmationAlert } from '../utils/popup';

export default function Home({ username, setUsername }: { username: string, setUsername: any }) {
  const { handlePlay } = useStartQuiz();
  const handleConfirmStartQuiz = () => {
    showConfirmationAlert({
      title: 'Start Quiz?',
      message: 'You will have 1 minute to complete the quiz.',

      confirmText: 'Start',
      cancelText: 'Cancel',
      onConfirm: () => {
        handlePlay();
      },
    });
  };

  const handleConfirmLogout = () => {
    showConfirmationAlert({
      title: 'Confirm Logout',
      message:
        'Are you sure you want to log out? Your session will be terminated.',
      confirmText: 'Logout',
      cancelText: 'Cancel',
      onConfirm: () => {
        // Clear user data from localStorage
setUsername('')
        localStorage.removeItem('token'); // Replace with your actual token key
        localStorage.removeItem('user'); // Replace with your actual user data key if needed

        // Redirect to login page
        setTimeout(() => {
    window.location.href = '/login';
  }, 1000);

      },
    });
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen flex flex-col gap-5 items-center justify-center text-4xl font-bold rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-5xl text-center text-gray-700">
              Hallo<span className="text-blue-400"> {username}!</span>
            </h1>
            <h3 className="text-xl font-medium text-gray-700">
              Take the quiz to see how much you know!
            </h3>
          </div>
        </div>
        <div className="flex gap-4">
          <BaseButton
            textButton="Start Quiz"
            className="bg-blue-400 text-white text-xl"
            onClick={handleConfirmStartQuiz}
          />

          <BaseButton
            textButton="Logout"
            className="bg-red-400 text-white text-xl"
            onClick={handleConfirmLogout}
          />
        </div>
      </div>
    </div>
  );
}
