import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Level1 from './pages/Level1';
import Level2 from './pages/Level2';
import Level3 from './pages/Level3';
import Level4 from './pages/Level4';
import Level5 from './pages/Level5';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-500 text-white p-4">
          <ul className="flex justify-center">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/level1">Key Generation</Link>
            </li>
            <li className="mr-4">
              <Link to="/level2">Encryption</Link>
            </li>
            <li className="mr-4">
              <Link to="/level3">Decryption</Link>
            </li>
            <li className="mr-4">
              <Link to="/level4">Maze Game</Link>
            </li>
            <li>
              <Link to="/level5">Diffie hellman Exchange</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/level4" element={<Level4 />} />
          <Route path="/level5" element={<Level5 />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
