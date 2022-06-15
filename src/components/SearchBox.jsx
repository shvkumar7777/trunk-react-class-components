import React, { Component } from 'react'
import './SearchBox.css'

class SearchBox extends Component {
  render() {
    return (
      <div className='search__container'>
        <input className='search__input' 
        placeholder='Type keywords Here'
        onChange={(event)=>this.props.handleInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBox