import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home.jsx';
import Projects from './Components/Projects.jsx';
import Experience from './Components/Experience.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route patch="/" element={<Home />} />
          <Route patch="/projects" element={<Projects />} />
          <Route patch="/experience" element={<Experience />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
