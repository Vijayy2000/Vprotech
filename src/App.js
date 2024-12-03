import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from "./Pages/Home"
import About from './Pages/About';
import Serivese from './Pages/Serivese';
import OurProduct from './Pages/OurProduct';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Serivese />} />
          <Route path="/contact" element={<OurProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
