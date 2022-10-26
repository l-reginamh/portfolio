import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
