import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component {
    render() {
    return (
        <div className='footer__container'>
            <a href="https://www.linkedin.com/in/dasoju-shiva-kumar-394341a3/" 
            className="footer__link" 
            target='_blank' 
            rel="noreferrer">
                here is my linked in page
            </a>
        </div>
    )
    }
}

export default Footer