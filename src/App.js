// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './form';
import Details from './details';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
