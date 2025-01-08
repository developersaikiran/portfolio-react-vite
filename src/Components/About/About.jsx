import React from 'react'
import './About.css'
import theme_pattern from '../../assets/images/theme_pattern.png';
import profile_img from '../../assets/images/about_profile.jpg';
// import profile_img from '../../assets/images/about_profile.svg';

export function About() {
    return (
        <div id='about' className='about'>
            <div className="sd-section-title">
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
                        <p>With a mastery of JavaScript, Node.js, React.js, express.js, HTML, CSS, I can help ensure your online presence stands out from the crowd. I am skilled in frontend development, building RESTful APIs, and seamlessly integrating external services.</p>
                        <p>Experience in working with Version Control Tools like GIT to perform multiple tasks such as creating and editing repository configurations and assigning access and parameters to users, branching repositories, depending upon project requirements, generating, and reviewing log changes.</p>
                        <p>Good understanding on various DevOps technologies/ tools like GIT, Github, Gitlab</p>
                        <p>Good understanding on managing applications using AWS Cloud which includes services like EC2, S3, Security Groups.</p>
                        <p>Good experience in areas of <b>CI/CD</b> Pipeline.</p>
                        <p>Proficient in communication and project management with good experience in resolving clients' issues.</p>
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
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>9+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>9+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
