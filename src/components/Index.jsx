import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Services from './Services';
import Portfolio from './Portfolio';
import Project from './Project';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Index = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Qualification />
                <Services />
                <Portfolio />
                <Project />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default Index