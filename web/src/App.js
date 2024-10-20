import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import PreLoader from './Components/PreLoader';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import NotFound from './Components/NotFound';


import './main.scss'
// import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';


function App() {
  return (
    <div className="App">

      {/* <PreLoader /> */}
      <Router>
        {/* //! Naprawic nawigacje */}
        <Navbar />
        <Routes>
          <Route index element={
            <>
              <Home />
              <AboutMe />
              <Education />
              <Projects />
            </>
          } />
        </Routes>
        <Routes>
          <Route path='/aboutMe' element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/education" element={<Education />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>

        {/* <Route path="/*" element={<NotFound />} /> */}


        <ContactMe />




      </Router>

    </div >
  );
}

export default App;
