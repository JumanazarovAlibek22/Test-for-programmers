import React from 'react';
import { useNavigate } from 'react-router-dom';
import { languages } from '../data/questionsData';

const LanguageSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="container fade-in">
      <h1 className="title">Dasturlash tilini tanlang</h1>
      <p className="subtitle">Testni boshlash uchun o'zingizga qiziq bo'lgan tilni tanlang</p>
      
      <div className="grid">
        {languages.map((lang) => (
          <div 
            key={lang.id} 
            className="card hover-scale"
            style={{ '--theme-color': lang.color }}
            onClick={() => navigate(`/${lang.id}`)}
          >
            <div className="card-icon">{lang.icon}</div>
            <h2 className="card-title">{lang.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
