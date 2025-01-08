import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/images/theme_pattern.png';
import services_data from '../../assets/data/services_data.js';
import arrow_icon from '../../assets/images/arrow_icon.svg';

export function Services() {
    return (
        <div id='services' className='services'>
            <div className='sd-section-title'>
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className='services-container'>
                {
                    services_data.map((service, index) => {
                        return (
                            <div key={index} className='services-format'>
                                <h3>{service.s_no}</h3>
                                <h2>{service.s_name}</h2>
                                <p>{service.s_desc}</p>
                                <div className='services-readmore'>
                                    <p>Read More</p>
                                    <img src={arrow_icon} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
