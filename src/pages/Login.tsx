import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { showSuccessAlert } from '../utils/popup';

export default function Login({
  username,
  setUsername,
}: { username: string; setUsername: (val: string) => void }) {
  const { handleLogin } = useLogin(username);
  const [error, setError] = useState('');

  const validateAndLogin = () => {
    const lettersOnlyRegex = /^[A-Za-z]+$/;

    if (!username) {
      setError('Username is required.');
      return;
    }

    if (!lettersOnlyRegex.test(username)) {
      setError('Username must contain only letters.');
      return;
    }

    setError('');
    handleLogin();
    showSuccessAlert('Login Success');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[500px] h-fit p-3 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Login to Quiz</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`border p-2 rounded w-full ${error ? 'border-red-500' : ''}`}
          aria-invalid={!!error}
        />
        {error && (
          <p className="text-red-500 text-sm self-start w-full">{error}</p>
        )}
        <button
          onClick={validateAndLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
