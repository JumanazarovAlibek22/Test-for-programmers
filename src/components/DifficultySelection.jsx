import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { languages, difficulties } from '../data/questionsData';

const DifficultySelection = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  
  const langObj = languages.find(l => l.id === language);
  
  if (!langObj) {
    return (
      <div className="container">
        <h2>Bunday til topilmadi</h2>
        <button className="btn" onClick={() => navigate('/')}>Orqaga qaytish</button>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <button className="btn-back" onClick={() => navigate('/')}>&larr; Orqaga</button>
      <h1 className="title">{langObj.icon} {langObj.name}</h1>
      <p className="subtitle">Qiyinlik darajasini tanlang</p>
      
      <div className="grid">
        {difficulties.map((diff) => (
          <div 
            key={diff.id} 
            className="card hover-scale"
            style={{ '--theme-color': diff.color }}
            onClick={() => navigate(`/${language}/${diff.id}`)}
          >
            <h2 className="card-title">{diff.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelection;
