import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Activities from './pages/activities';

function App() {
  return (
    <Router>
      <header>
        <h1>Weekend Planner</h1>
      </header>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/" element={
          <main>
            <p>Welcome to the Weekend Planner! Find the best activities for your weekends.</p>
          </main>
        } />
      </Routes>
      <footer>
        <p>&copy; 2024 Weekend Planner</p>
      </footer>
    </Router>
  );
}

export default App;
