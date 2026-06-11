import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Result = () => {
  const { language } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const score = location.state?.score || 0;
  const total = location.state?.total || 0;
  
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  
  let message = "";
  if (percentage >= 80) message = "Ajoyib natija! 🎉";
  else if (percentage >= 50) message = "Yaxshi! Lekin yana o'rganish kerak. 👍";
  else message = "Ko'proq tayyorlanishingiz kerak! 📚";

  return (
    <div className="container fade-in text-center">
      <h1 className="title">Test yakunlandi</h1>
      
      <div className="result-card">
        <div className="score-circle">
          <h2>{percentage}%</h2>
        </div>
        <h3>{message}</h3>
        <p className="score-details">Siz {total} ta savoldan {score} tasiga to'g'ri javob berdingiz.</p>
      </div>

      <div className="action-buttons">
        <button className="btn" onClick={() => navigate(`/${language}`)}>Boshqa daraja tanlash</button>
        <button className="btn btn-outline" onClick={() => navigate('/')}>Bosh sahifaga qaytish</button>
      </div>
    </div>
  );
};

export default Result;
