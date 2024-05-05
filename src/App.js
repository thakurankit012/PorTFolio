import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mode from './components/Mode';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  // Function to handle language change
  const changeLanguage = (langCode) => {
    setSelectedLanguage(langCode);
  };

  return (
    <>
      <Header changeLanguage={changeLanguage} />
      <Hero selectedLanguage={selectedLanguage} />
      <About selectedLanguage={selectedLanguage} />
      <Projects selectedLanguage={selectedLanguage} />
      <Blog selectedLanguage={selectedLanguage} />
      <Contact selectedLanguage={selectedLanguage} />
      <Footer selectedLanguage={selectedLanguage} />
      <Mode />
    </>
  );
}

export default App;
