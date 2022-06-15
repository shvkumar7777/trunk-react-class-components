import React, { Component } from 'react'
import ChallengeDetailsCard from '../challengedetailscard/ChallengeDetailsCard';
import ReaclChallenge from '../realchallenge/ReaclChallenge';
import './TypingChallenge.css'

class TypingChallenge extends Component {
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
        <div className='challenge__container'>
        {/* Details section */}
            <div className="details__container">
                {/* words */}
                <ChallengeDetailsCard cardname="Words" cardvalue={words}/>{/* <p>Words: {words}</p> */}
                {/* Characters */}
                <ChallengeDetailsCard cardname="Characters" cardvalue={characters}/> {/* <p>Characters: {characters}</p> */}
                {/* speed */}
                <ChallengeDetailsCard cardname="Speed" cardvalue={wpm}/>{/* <p>Speed: {wpm}</p> */}
            </div>
        {/* The Real Challenge */}
            <div className='realchallenge__container' >
                <ReaclChallenge 
                timerStarted={timerStarted}
                timerRemaining={timerRemaining}
                sentence={selectedParagraph}
                testInfo={testInfo}
                onHandleInput={onHandleInput}
                />
            </div>
        </div>
    )
    }
}

export default TypingChallenge