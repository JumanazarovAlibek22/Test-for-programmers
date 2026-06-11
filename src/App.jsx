import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelection from './components/LanguageSelection';
import DifficultySelection from './components/DifficultySelection';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <div className="logo">👨‍💻 IT Test App</div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LanguageSelection />} />
            <Route path="/:language" element={<DifficultySelection />} />
            <Route path="/:language/:difficulty" element={<Quiz />} />
            <Route path="/:language/:difficulty/result" element={<Result />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
