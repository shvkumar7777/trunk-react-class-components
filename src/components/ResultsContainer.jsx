import React, { Component } from 'react'
import NameCard from './NameCard'
import './ResultsContainer.css'

class ResultsContainer extends Component {

  render() {
const suggestedNamesJsx = this.props.suggestedNames.map(suggestedName=>{
    return <NameCard key={suggestedName} suggestedName={suggestedName}/>;
  })
    return (
      <div className='results__container'>{suggestedNamesJsx}</div>
    )
  }
}

export default ResultsContainer