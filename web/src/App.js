import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PreLoader from './Components/PreLoader';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Education from './Components/Education';

import './main.scss'
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">

      <PreLoader />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        {/* <Home />
        <Projects />
        <Education /> */}
        <Footer />
      </Router>

    </div>
  );
}

export default App;
