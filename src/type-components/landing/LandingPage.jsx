import React, { Component } from 'react'
import './LandingPage.css'
import flashlogo from '../../assetstype/flash.png';

class Landingpage extends Component {
    render() {
    return (
        <div className='landing__container'>
            <div data-aos="fade-right" className="landing__left">
                <h1 className='loading__header'>Can you type...</h1>
                <div className="typewriter__container">
                    <p>Fast?</p>
                    <p>Quick?</p>
                    <p>Correct?</p>
                </div>
            </div>
            <div  className="landing__right">
                <img data-aos="fade-left" className='flash__logo' src={flashlogo} alt='flash_logo'/>
            </div>
        </div>
    )
    }
}

export default Landingpage