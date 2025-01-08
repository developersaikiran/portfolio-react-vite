import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/images/theme_pattern.png';
import mail_icon from '../../assets/images/mail_icon.svg';
import location_icon from '../../assets/images/location_icon.svg';
import call_icon from '../../assets/images/call_icon.svg';
import arrow_icon from '../../assets/images/arrow_icon.svg';

export function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "");

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
            <div className='sd-section-title'>
                <h1>Contact</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className='contact-section'>
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Full Stack Developer | Building High-Quality Web and Mobile Experiences | Turning Ideas into Digital Reality</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt="" />
                            <p>developer.sai65@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt="" />
                            <p>+91 7041 9966 09</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt="" />
                            <p>Surat, Gujarat, India - 395010</p>
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
