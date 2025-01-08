import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/images/theme_pattern.png';
import mywork_data from '../../assets/data/mywork_data.js';
import arrow_icon from '../../assets/images/arrow_icon.svg';

export function Mywork() {
    return (
        <div id='portfolio' className='mywork'>
            <div className='sd-section-title'>
                <h1>My Work</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className='mywork-container'>
                {mywork_data.map((work, index) => {
                    return (
                        <div className='work-item'>
                            <div>
                                <h1>{work.title}</h1>
                                <p>{work.short_description}</p>
                            </div>
                            <img key={index} src={work.w_img} />
                        </div>
                    )
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} />
            </div>
        </div>
    )
}
