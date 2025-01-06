import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

export function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ece0fb86-0a6b-442f-85bf-0b50bc145df0");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
            console.log("Success", res);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>My Work</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className='contact-section'>
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>abcd</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt="" />
                            <p>saikirand2014@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt="" />
                            <p>+772-825-524</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt="" />
                            <p>CA, United States of America</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea type='message' rows="8" placeholder='Enter your message' name='message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}
