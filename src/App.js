import React from 'react';
import Component1 from './Component1';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Component2 from './Component2';
import Component3 from './Component3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/second-component" element={<Component2/>} />
          <Route path="/third-component" element={<Component3/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
