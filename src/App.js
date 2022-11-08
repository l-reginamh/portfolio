import React, {useState} from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import SocialMedia from './components/socialmedia/SocialMedia';
import './App.css';

function App() {
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>
      <div className='container'>
        <Header theme={theme} themeChange={thetheme => switchTheme()} />
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
