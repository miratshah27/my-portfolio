import React from 'react';
import About from './about/index';
import Projects from './projects/index';
import Skills from './skills/index';
import Contact from './contact/index';
import Work from './work/index';
import './body.css'


function Body() {
    return (
        <div className='body'>
           <section id="about">
                <About />
            </section> 
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
