import React, { Component } from 'react'
import './TestLetter.css'

export class TestLetter extends Component {
  render() {
    const {individualletterInfo }  = this.props;
    const { status } = individualletterInfo;
    // let statusclass;

    const statusClassName = {
        correct:"correct__testletter",
        inCorrect:"incorrect__testletter",
        notAttempted:"notattempted__testletter"
    }[status];
    // if(status === 'correct'){
    //     statusclass = 'correct__testletter'
    // }else if (status === 'incorrect') {
    //     statusclass = 'incorrect__testletter'
    // }else{
    //     statusclass = 'notattempted__testletter'
    // }
    return (
            <span className={`test__letter ${statusClassName}` }>{individualletterInfo.testletter}</span>
    )
  }
}

export default TestLetter