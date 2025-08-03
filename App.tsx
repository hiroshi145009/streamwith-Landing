
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<Navigate to="/landing" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
