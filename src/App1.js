import './App1.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import ResultsContainer from './components/ResultsContainer';
import React from 'react';

const name = require('@rstacruz/startup-name-generator');

class App1 extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      logoTitle:"Name it",
      logoExpanded :true,
      suggestedNames:[],
    }
  }
  handleInputChange = (inputText)=>{
    // console.log(name("cloud")) 
    this.setState({
      logoExpanded:inputText.length > 0 ? false : true,
      suggestedNames:inputText? name(inputText):[],
    })
    
    console.log(this.suggestedNames)
  }
  render(){
    return (
      <div className='app'>
      <Header logoExpanded={this.state.logoExpanded} logoTitle={this.state.logoTitle}/>
      <SearchBox handleInputChange={this.handleInputChange}/>
      <ResultsContainer suggestedNames ={this.state.suggestedNames}/>
      </div>
    );
  }
  }
  

export default App1;
