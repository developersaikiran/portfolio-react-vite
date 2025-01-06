import React from 'react'
import './Home.css';
import portfolio_img from '../../assets/profile_img.svg';


export function Home() {
  return (
    <div className='home'>
        <img src={portfolio_img} />
        <h1><span>I'm Saikiran,</span> Frontend developer based in India</h1>
        <p>I'm Saikiran Deekonda Frontend developer based in India With 3 years of experience</p>
        <div className='home-action'>
            <div className='home-connect'>Connect with me</div>
            <div className='home-resume'>My Resume</div>
        </div>
    </div>
  )
}
