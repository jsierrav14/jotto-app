import React, {Component} from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrat'

class App extends  Component{
  render() {
    return (
      <div className="App">
      <h1>Jotto</h1>
         <Congrats success={false}/>
         <GuessedWords guessedWords={ [
          {guessedWord:'Train', letterMatchCount:3},
          {guessedWord:'agile', letterMatchCount:1},
          {guessedWord:'party', letterMatchCount:5}
      ]} />
      </div>
    );
  }

}

export default App;
