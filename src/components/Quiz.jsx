import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questionsData, languages, difficulties } from '../data/questionsData';

const Quiz = () => {
  const { language, difficulty } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionIndex: selectedOption }
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const langQuestions = questionsData[language];
  
  // Test savollarini olish va har bir savolning variantlarini tasodifiy aralashtirish
  const testQuestions = useMemo(() => {
    const questions = langQuestions ? langQuestions[difficulty] : null;
    if (!questions) return null;
    return questions.map(q => {
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      return { ...q, options: shuffledOptions };
    });
  }, [langQuestions, difficulty]);

  if (!testQuestions || testQuestions.length === 0) {
    return (
      <div className="container">
        <h2>Kechirasiz, ushbu til/daraja uchun hozircha testlar yo'q.</h2>
        <button className="btn" onClick={() => navigate(`/${language}`)}>Orqaga qaytish</button>
      </div>
    );
  }

  const currentQuestion = testQuestions[currentQuestionIndex];
  const langObj = languages.find(l => l.id === language);
  const diffObj = difficulties.find(d => d.id === difficulty);

  const currentAnswer = answers[currentQuestionIndex];
  const isAnswered = currentAnswer !== undefined;

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    const newAnswers = { ...answers, [currentQuestionIndex]: option };
    setAnswers(newAnswers);
    setSelectedOption(option);
    setShowFeedback(true);

    // Auto-advance after 1.2s if not on last question
    if (currentQuestionIndex < testQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      }, 1200);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      const nextAnswer = answers[currentQuestionIndex + 1];
      setSelectedOption(nextAnswer || null);
      setShowFeedback(nextAnswer !== undefined);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      const prevAnswer = answers[currentQuestionIndex - 1];
      setSelectedOption(prevAnswer || null);
      setShowFeedback(prevAnswer !== undefined);
    }
  };

  const handleFinish = () => {
    const score = Object.entries(answers).reduce((acc, [idx, chosen]) => {
      return chosen === testQuestions[parseInt(idx)].answer ? acc + 1 : acc;
    }, 0);
    navigate(`/${language}/${difficulty}/result`, {
      state: { score, total: testQuestions.length }
    });
  };

  const answeredCount = Object.keys(answers).length;
  const progress = ((currentQuestionIndex + 1) / testQuestions.length) * 100;
  const isLastQuestion = currentQuestionIndex === testQuestions.length - 1;

  // Determine option class for current question
  const getOptionClass = (option) => {
    let cls = "option-btn";
    const savedAnswer = answers[currentQuestionIndex];
    if (savedAnswer !== undefined) {
      if (option === currentQuestion.answer) {
        cls += " correct";
      } else if (option === savedAnswer && option !== currentQuestion.answer) {
        cls += " incorrect";
      }
    }
    return cls;
  };

  return (
    <div className="container fade-in">
      {/* Header */}
      <div className="quiz-header">
        <div className="quiz-info">
          <span>{langObj?.icon} {langObj?.name}</span>
          <span className="badge" style={{ backgroundColor: diffObj?.color }}>{diffObj?.name}</span>
        </div>
        <div className="quiz-progress-text">
          Savol: {currentQuestionIndex + 1} / {testQuestions.length}
          <span className="answered-count"> · {answeredCount} javoblandi</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Question Dots */}
      <div className="question-dots">
        {testQuestions.map((_, idx) => (
          <button
            key={idx}
            className={`question-dot ${idx === currentQuestionIndex ? 'active' : ''} ${answers[idx] !== undefined ? (answers[idx] === testQuestions[idx].answer ? 'dot-correct' : 'dot-wrong') : ''}`}
            onClick={() => {
              setCurrentQuestionIndex(idx);
              const ans = answers[idx];
              setSelectedOption(ans || null);
              setShowFeedback(ans !== undefined);
            }}
            title={`Savol ${idx + 1}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Question Box */}
      <div className="question-box">
        <h2 className="question-text">{currentQuestion.question}</h2>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={getOptionClass(option)}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="quiz-navigation">
        <button
          className="nav-btn nav-prev"
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
        >
          ← Oldingi
        </button>

        <div className="nav-center-info">
          {answeredCount} / {testQuestions.length} javoblandi
        </div>

        {isLastQuestion ? (
          <button
            className="nav-btn nav-finish"
            onClick={handleFinish}
            disabled={answeredCount === 0}
          >
            ✅ Yakunlash
          </button>
        ) : (
          <button
            className="nav-btn nav-next"
            onClick={handleNext}
            disabled={currentQuestionIndex === testQuestions.length - 1}
          >
            Keyingi →
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
