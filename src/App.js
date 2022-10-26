import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import SocialMedia from './components/socialmedia/SocialMedia';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <Header />
        <SocialMedia />
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
