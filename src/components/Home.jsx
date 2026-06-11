import { Link } from 'react-router-dom';
import { questions } from '../data/questions';

export default function Home() {
  const totalQuestions = questions.length;
  
  return (
    <div className="home-wrapper animate-fade-in">
      <h1>React Mastery Quiz</h1>
      <p className="mb-6">
        O'z React bilimingizni sinab ko'ring! Ushbu quiz orqali siz React asoslari, Hooks, Router va boshqa muhim mavzularni qanchalik yaxshi tushunganingizni tekshirishingiz mumkin.
      </p>
      
      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-value">{totalQuestions}</div>
          <div className="text-muted">Jami savollar</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">3</div>
          <div className="text-muted">Qiyinchilik darajasi</div>
        </div>
      </div>
      
      <Link to="/quiz" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
        Boshlash
      </Link>
    </div>
  );
}
