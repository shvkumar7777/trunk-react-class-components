import React, { Component } from 'react'
import './NavBar.css'
import logo from './../../assetstype/logo.png'

class NavBar extends Component {
render() {
    return (
    <div className='appnavbar__container'>
        <div className="nav__left">
            <img src={logo} className='app__logo' alt='logo'/>
            <p className="navbar__title">FlashType</p>
        </div>
        <div className="nav__right">
            <a href="https://github.com/shvkumar7777/" 
            className="navbar__link" target="_blank" rel="noreferrer">
               DASOJU
            </a>
            
        </div>
    </div>
    )
}
}

export default NavBar