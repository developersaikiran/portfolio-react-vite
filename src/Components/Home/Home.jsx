import React from 'react'
import './Home.css';
// import portfolio_img from '../../assets/images/profile_img.svg';
import portfolio_img from '../../assets/images/profile_img.png';
import backgroundVideo from '../../assets/images/background_video.mp4';

export function Home() {
  return (
    <div className='home'>
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='home-content'>
        <img src={portfolio_img} />
        <h1><span>I'm Saikiran,</span> Full Stack developer based in India</h1>
        <p>I'm Saikiran Deekonda Frontend developer based in India With 3+ years of experience</p>
        <div className='home-action'>
          <div className='home-connect'>Connect with me</div>
          <div className='home-resume'>My Resume</div>
        </div>
      </div>
    </div>
  )
}
