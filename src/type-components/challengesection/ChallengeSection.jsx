import React, { Component } from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'

class ChallengeSection extends Component {

    render() {
        const {
            selectedParagraph,
            timerStarted,
            timerRemaining,
            characters,
            words,
            wpm,
            testInfo,
            onHandleInput
        } = this.props;

    return (
        <div className='challenge__section'>
            <h1 data-aos="fade-down" className="challenge__header">
                Take a sped test now! 
            </h1>
            <TestContainer 
            selectedParagraph={selectedParagraph}
            timerStarted={timerStarted}
            timerRemaining={timerRemaining}
            characters = {characters} 
            words={words} 
            wpm={wpm}
            testInfo={testInfo}
            onHandleInput={onHandleInput}
            />
        </div>
    )
    }
}

export default ChallengeSection