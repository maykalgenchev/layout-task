import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home.js'
function App() {
  return (
    <div id="container">
      <body id="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </body>
    </div>
  );
}

export default App;
