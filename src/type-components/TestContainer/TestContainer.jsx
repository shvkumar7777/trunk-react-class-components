import React, { Component } from 'react'
import TypingChallenge from '../typingchallenge/TypingChallenge'
import TryAgain from '../Tryagain/TryAgain'
import './TestContainer.css'

class TestContainer extends Component {
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
        // const timeRemaining = 10;
    return (
        <div className='app__testcontainer'>
        {
            timerRemaining  > 0 ? (
                <div className="typingchallenge__container">
                <TypingChallenge 
                selectedParagraph={selectedParagraph}
                timerStarted={timerStarted}
                timerRemaining={timerRemaining}
                words={words} 
                characters={characters} 
                wpm={wpm} 
                testInfo={testInfo}
                onHandleInput={onHandleInput}
                />
            </div>
            ) : (
                <div className="tryagain__con"> 
                <TryAgain 
                words={40} 
                characters={120} 
                wpm={20} />
            </div>
            )
        }
        </div>
    )
    }
}

export default TestContainer