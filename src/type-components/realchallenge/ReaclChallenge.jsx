import React, { Component } from 'react'
import TestLetter from '../testletter/TestLetter';
import './RealChallenge.css'

class ReaclChallenge extends Component {
    

    render() {
        const {
            // sentence,
            timerStarted,
            timerRemaining,
            testInfo,
            onHandleInput
        } = this.props;
        // console.log('from real challenge',testInfo);
 
    return (
        <div className='realchallenge__container'>
            <div className="challenge__timer">
                <p className='timer'>00:{timerRemaining >= 10 ? timerRemaining : `0${timerRemaining}` }</p>
                <p className='timer__info'> {!timerStarted && "To start the test , please start typing!" }</p>
            </div>
            <div className="textarea__container">
                <div className="textarea__left">
                    <div className="textarea test__paragraph">
                    {testInfo.map((individualletterInfo,index)=>{
                        return (
                            <TestLetter 
                            key={index}
                            individualletterInfo={individualletterInfo}/>
                        )
                    })}
                    </div>
                </div>
                <div className="textarea__right">
                    <textarea className='textarea'
                    placeholder='start typing here' 
                    onChange={(event)=>onHandleInput(event.target.value)}></textarea>
                </div>
            </div>
        </div>
    )
    }
}

export default ReaclChallenge