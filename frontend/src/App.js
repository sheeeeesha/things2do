import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/Signup';
// import Landing from './pages/Landing';

import './App.css';    // Imports App-wide styles
import './index.css';  // Imports base styles, resets, etc.

// import Activities from './pages/activities'; // Example additional page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/activities" element={<Activities />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
