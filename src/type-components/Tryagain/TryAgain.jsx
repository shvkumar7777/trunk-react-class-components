import React, { Component } from 'react'
import './TryAgain.css'

class TryAgain extends Component {
    
    render() {
        const {handleRetry, words,characters,wpm} = this.props;
        
    return (
        <div className='tryagain__container'>
            <h1>Test Results</h1>
            <div className='results__container'>
                <p>
                    <b>Characters</b>:{characters}
                </p>
                <p>
                    <b>Words</b>:{words}
                </p>
                <p>
                    <b>wpm</b>:{wpm}
                </p>
            </div>
            <div className="buttons__container">
                <button 
                onClick={handleRetry}
                className="end__buttons retry__button">Re-try</button>
                
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <button className="end__buttons fbshare__button">Share</button>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <button className="end__buttons tweet__button">Tweet</button>
                </a>
            </div>
        </div>
    )
    }
}

export default TryAgain