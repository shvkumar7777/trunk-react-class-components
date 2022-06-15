import './AppType.css';
import React from 'react';
import NavBar from './type-components/navbar/NavBar';
import LandingPage from './type-components/landing/LandingPage';
import Footer from './type-components/footer/Footer';
import ChallengeSection from './type-components/challengesection/ChallengeSection';

const totalTime = 10;
const noOfParagrpahs = 2;
const noOfSentences = 6;
const serviceURL = `http://metaphorpsum.com/paragraphs/${noOfParagrpahs}/${noOfSentences}`

class AppType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedParagraph : "Hello Master",
      timerStarted:false,
      timerRemaining:totalTime,
      characters:5,
      words:2,
      speed:20,
      testInfo: [],
    }
  }
  componentDidMount(){
    // fetch(serviceURL)
    // .then(response=>response.text())
    // .then(text => this.setState({
    //   selectedParagraph:text
    // }));
    // console.log(this.state.selectedParagraph)
    const selectedParagrapharray = this.state.selectedParagraph.split('');
    const testInfo = selectedParagrapharray.map(selectedLetter=>{
      return {
        testletter  : selectedLetter,
        status : "notAttempted"
      };
    })
    this.setState({testInfo:testInfo})
  }

  handleTimer = () =>{
    let timer = setInterval(() => {
      this.setState({timerStarted:true})
      if(this.state.timerRemaining >0){
        this.setState({
          timerRemaining : this.state.timerRemaining -1
        })
      }else{
        clearInterval(timer)
      } 
    }, 1000);
  }

   handleUserInput = (inputValue)=>{
    // console.log(inputValue);
    if(!this.state.timerStarted) this.handleTimer();
    
    const noOfCharacters = inputValue.length;
    const noOfWords = inputValue.split(" ").length;
    const index = noOfCharacters -1;
// Handle underflow case i.e when the no text is being entered in the text input 
// i.e noOfCharacters are zero or index is set to "-1"
    if(index<0){
      this.setState({
        testInfo:[{
          testletter:this.state.testInfo[0].testletter,
          status:"notAttempted"
        },
        ...this.state.testInfo.slice(1)
      ],
      characters:noOfCharacters,
      words:noOfWords
      })
      return;
    }

    // handle overflow case where the index is greteer tan the entire length of the selected paragraph
if(index>=this.state.selectedParagraph.length){
  this.setState({
    characters:noOfCharacters,
    words:noOfWords
  })
return;
}
    //handle backspace i.e when 
    const testInfo = this.state.testInfo;
    if(!(index===this.state.selectedParagraph.length - 1)) 
      testInfo[index + 1].status  = "notAttempted"

    // check for the correct and incorrect typed letter
    if(testInfo[index].testletter === inputValue[index]){
      testInfo[index].status = "correct" 
    } else{
      testInfo[index].status = "inCorrect" 
    }

    //update the state
    this.setState({
      testInfo,
      characters:noOfCharacters,
      words:noOfWords
    })

}

  render(){
    console.log("render method got called ")
    return (
      <div className='app'>
        {/* nav bar */}
        <NavBar/>
        {/* landing page */}
        <LandingPage/>
        {/* challenge secrion */}
        <ChallengeSection 
        selectedParagraph={this.state.selectedParagraph} 
          timerStarted={this.state.timerStarted}
          timerRemaining={this.state.timerRemaining}
          characters={this.state.characters}
          words={this.state.words}
          wpm={this.state.speed}
          testInfo={this.state.testInfo}
          onHandleInput={this.handleUserInput}
        />
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
  }
  

export default AppType;
