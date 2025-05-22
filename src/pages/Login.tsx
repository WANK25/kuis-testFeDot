import { useLogin } from '../hooks/useLogin';

export default function Login({
  username,
  setUsername,
}: { username: string; setUsername: (val: string) => void }) {
  const { handleLogin } = useLogin(username);
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Login to Quiz</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
