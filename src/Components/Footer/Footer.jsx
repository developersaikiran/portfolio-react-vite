import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

export function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img src={footer_logo} alt="" srcset="" />
                    <p>Im a frontend Developer from india</p>
                </div>
                <div className='footer-top-right'>

                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type='email' placeholder='Enter your email' name='email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>
                <div className='footer-bottom-left'>
                    @ 2025 Saikiran Deekonda. All rights
                </div>
                <div className='footer-bottom-right'>
                    <p >Term of Services</p>
                    <p >Privacy Policy</p>
                    <p >Contact with me</p>
                </div>
            </div>

        </div>
    )
}
