import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Education from './Components/Education';

import './main.scss'
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
