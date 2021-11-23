import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hey there 👋,I am <br /> <span className='info-name'>Mirat Shah</span>.
                    <br />I love exploring various web technologies <br />and keen about learning WEB 3.0
                </div>
                <div className='ablout-photo'>
                    <img src={require('../../../assets/coder.png').default} className='picture'/>
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
