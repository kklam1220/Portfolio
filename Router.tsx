import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ITPortfolio from './pages/ITPortfolio';
import CVPage from './pages/CVPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/it-portfolio" element={<ITPortfolio />} />
        <Route path="/it-portfolio/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
