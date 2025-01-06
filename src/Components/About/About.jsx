import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg';

export function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt="" />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I'm your go-to Full Stack Developer, ready to bring your dream product to life in the virtual world. From creating stylish websites for businesses of all sizes to turning your tech ideas into reality, I've got the skills and expertise to make it happen.</p>
                        <p>I'm your go-to Full Stack Developer, ready to bring your dream product to life in the virtual world. From creating stylish websites for businesses of all sizes to turning your tech ideas into reality, I've got the skills and expertise to make it happen.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>HTML & CSS</p> <hr style={{ width: '60%' }} /> </div>
                        <div className="about-skill"> <p>React Js</p> <hr style={{ width: '70%' }} /> </div>
                        <div className="about-skill"> <p>Node Js</p> <hr style={{ width: '90%' }} /> </div>
                        <div className="about-skill"> <p>DevOps</p> <hr style={{ width: '50%' }} /> </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
