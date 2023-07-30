import React, { useState } from 'react';
import quizData from '../components/quizData.json'; // Import the quiz data
import styles from './QuizCategory.module.css';
const Question = ({ question, options, onOptionClick, selectedOption }) => {
  return (
    <>
      <h2 className={styles.question}>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => onOptionClick(option)}
            className={`${styles.option} ${
              selectedOption === option ? styles.selected : ''
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};

const ResultMessage = ({ isCorrect, correctAnswer }) => {
  return (
    <p
      className={` ${styles.message} ${
        isCorrect ? styles.correct : styles.wrong
      }`}
    >
      {isCorrect
        ? 'Correct!'
        : `Wrong! The correct answer is ${correctAnswer}.`}
    </p>
  );
};

const QuizCategory = ({ category, title }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const currentCategoryData = quizData[category];
  const currentQuiz = currentCategoryData.quizzes[currentQuestion];

  const handleOptionClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
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

  return (
    <>
      <h1 className={styles.h1}>{title}</h1>
      <section className={styles.container}>
        {currentQuiz && (
          <>
            <Question
              question={currentQuiz.question}
              options={currentQuiz.options}
              onOptionClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            {showResult && (
              <ResultMessage
                isCorrect={isCorrect}
                correctAnswer={currentQuiz.answer}
              />
            )}
            {showResult && (
              <button onClick={handleNextQuestion}>
                {currentQuestion === currentCategoryData.quizzes.length - 1
                  ? 'Check Score 🎯'
                  : 'Next Question ⏭️'}
              </button>
            )}
          </>
        )}
        {currentQuestion === currentCategoryData.quizzes.length && (
          <div className={styles.score}>
            <p>Quiz completed!</p>
            <p>
              total correct: {totalCorrect}/{currentCategoryData.quizzes.length}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default QuizCategory;
