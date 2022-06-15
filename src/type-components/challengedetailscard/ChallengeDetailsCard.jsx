import React, { Component } from 'react'
import './ChallengeDetailsCard.css'

class ChallengeDetailsCard extends Component {
    render() {
        const {cardname,cardvalue} = this.props;
    return (
        <div className='carddetails__container'>
            <div className="card__name">{cardname}</div>
            <div className="card__value">{cardvalue}</div>
        </div>
    )
    }
}

export default ChallengeDetailsCard