import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PageHome from './components/pages/home/PageHome';
import PageClients from './components/pages/clients/PageClients';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/clients" element={<PageClients />} />
    </Routes>
  );
};

export default App;
