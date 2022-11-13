import React, {useState} from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [screen, setScreen] = useState('Home')
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>
      <div className='container'>
        <Header theme={theme} themeChange={thetheme => switchTheme()} screen={[screen, setScreen]} />
        {/* <SocialMedia /> */}
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
