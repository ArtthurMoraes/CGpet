// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contatos from './pages/Contatos';
//import Contatos from './components/ContatosList';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contatos />} />
    </Routes>
  </Router>
);

export default App;
