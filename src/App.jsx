import { useState } from 'react';
import './App.css';

const quizData = {
  quizzes: [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London'],
      answer: 'Paris',
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Beijing', 'Seoul'],
      answer: 'Tokyo',
    },
    {
      question: 'What is the capital of Brazil?',
      options: ['São Paulo', 'Brasília', 'Rio de Janeiro'],
      answer: 'Brasília',
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Canberra', 'Sydney', 'Melbourne'],
      answer: 'Canberra',
    },
    {
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Mumbai', 'Bangalore'],
      answer: 'New Delhi',
    },
    {
      question: 'What is the capital of Canada?',
      options: ['Toronto', 'Ottawa', 'Vancouver'],
      answer: 'Ottawa',
    },
    {
      question: 'What is the capital of South Africa?',
      options: ['Cape Town', 'Johannesburg', 'Pretoria'],
      answer: 'Pretoria',
    },
    {
      question: 'What is the capital of Russia?',
      options: ['Moscow', 'Saint Petersburg', 'Kiev'],
      answer: 'Moscow',
    },
    {
      question: 'What is the capital of China?',
      options: ['Beijing', 'Shanghai', 'Hong Kong'],
      answer: 'Beijing',
    },
  ],
};
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const handleOptionClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);

      const currentQuiz = quizData.quizzes[currentQuestion];
      const isCorrectAnswer = option === currentQuiz.answer;
      setIsCorrect(isCorrectAnswer);
      setShowResult(true);
      if (isCorrectAnswer) {
        setTotalCorrect((prevCount) => prevCount + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedOption('');
    setCurrentQuestion((prev) => prev + 1);
  };

  const currentQuiz = quizData.quizzes[currentQuestion];

  return (
    <>
      <h1 className="h1">Country Capital Quiz</h1>
      <section className="container">
        {currentQuiz && (
          <>
            <h2>{currentQuiz.question}</h2>
            <ul>
              {currentQuiz.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`kadel ${
                    selectedOption === option ? 'selected' : ''
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            {showResult && (
              <p className={`message ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect
                  ? 'Correct!'
                  : `Wrong! The correct answer is ${currentQuiz.answer}.`}
              </p>
            )}
            {showResult && (
              <button onClick={handleNextQuestion}>
                {currentQuestion === quizData.quizzes.length - 1
                  ? 'Check Score 🎯'
                  : 'Next Question ⏭️'}
              </button>
            )}
          </>
        )}
        {currentQuestion === quizData.quizzes.length && (
          <div className="score">
            <p>Quiz completed!</p>
            <p>
              {' '}
              total correct: {totalCorrect}/{quizData.quizzes.length}
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
