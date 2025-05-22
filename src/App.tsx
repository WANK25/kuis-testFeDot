import './index.css';
import Question from './pages/Question';
import { useEffect, useState } from 'react';
import { QuestionsAPI, QuestionProps } from './data/Queztion_API';
import ScoreQuiz from './pages/ScoreQuiz';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Review from './pages/Review';

function App() {
  const navigate = useNavigate();
  const [dataQuestions, setDataQuestions] = useState<QuestionProps[]>([]);
  const [username, setUsername] = useState<string>(
    () => localStorage.getItem('quizUser') || '',
  );

  useEffect(() => {
    if (!username) {
      navigate('/login');
    } else {
      QuestionsAPI().then((data) => setDataQuestions(data));
    }
  }, [username]);

  return (
    <Routes>
      <Route
        path="/quiz"
        element={<Question dataQuestions={dataQuestions} />}
      />
      <Route path="/" element={<Home username={username} />} />
      <Route
        path="/login"
        element={<Login setUsername={setUsername} username={username} />}
      />
      <Route path="/score" element={<ScoreQuiz />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default App;
