import React, { Component } from 'react'
import './NameCard.css'

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=?'

class NameCard extends Component {
  render() {
    const {suggestedName} = this.props;

    return (
    <a className='card__link' target="_blank" rel="noreferrer" href={`${nameCheapUrl}${suggestedName}`}>
        <div className='resultname__card'>
            <p className='result__name'>{suggestedName}</p>
        </div>
    </a>
    )
  }
}

export default NameCard