import React from 'react';
import './App.css';
import Header from './header';
import Overview from './components/Overview.jsx';
import About from './components/About.jsx';
import Contagion from './components/Contagion.jsx';
import Symptomps from './components/Symptoms.jsx';
import Prevention from './components/Prevention.jsx';
import Livereport from './components/Live_report.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="app">
        {/* this component is header section for application */}
        <Header />
        <Overview />
        <About />
        <Contagion/>
        <Symptomps />
        <Prevention/>
        <Livereport />
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
