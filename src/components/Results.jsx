import { Link, useLocation } from 'react-router-dom';
import { questions } from '../data/questions';

export default function Results() {
  const location = useLocation();
  const { score, userAnswers } = location.state || { score: 0, userAnswers: [] };
  
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let scoreClass = 'low';
  let message = "Yana ozroq o'qish kerak!";
  
  if (percentage >= 80) {
    scoreClass = 'high';
    message = "Ajoyib natija! Siz Reactni yaxshi bilasiz.";
  } else if (percentage >= 50) {
    scoreClass = 'medium';
    message = "Yomon emas! Lekin yana o'rganish kerak.";
  }

  return (
    <div className="card animate-fade-in">
      <div className="text-center mb-6">
        <h2>Quiz Natijasi</h2>
        <div className="score-circle" data-score={scoreClass}>
          <div className="score-text">{score}</div>
          <div className="score-label">/ {totalQuestions}</div>
        </div>
        <h3>{message}</h3>
        <p className="mt-4">Siz {percentage}% natija ko'rsatdingiz.</p>
      </div>
      
      <div className="flex-between mt-6" style={{ justifyContent: 'center', gap: '1rem' }}>
        <Link to="/quiz" className="btn btn-primary">
          Qayta urinib ko'rish
        </Link>
        <Link to="/" className="btn btn-outline">
          Bosh sahifa
        </Link>
      </div>
    </div>
  );
}
