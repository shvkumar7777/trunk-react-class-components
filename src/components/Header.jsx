import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='app__header__container'>
          <img src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' 
          alt='name it ' 
          className={`app__logo ${this.props.logoExpanded ?"logo__expanded":"logo__contracted"}`}></img>
            <h2 className={`app__logo__Text ${this.props.logoExpanded ?"logoText__expanded":"logoText__contracted"}`}>{this.props.logoTitle}</h2>
      </div>
    )
  }
}

export default Header