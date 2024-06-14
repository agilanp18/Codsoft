import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Features from './Components/Features';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;