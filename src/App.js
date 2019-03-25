import React, { Component } from 'react';
import Scoreboard from './components/scoreboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team1Name: "Rockets 1",
      team2Name: "Tito y Bambino",
      score1: 0,
      score2: 0
    }
  }

  increaseScore1 = () => {
    this.setState({ score1: this.state.score1 + 1 })
  }

  increaseScore2 = () => {
    this.setState({ score2: this.state.score2 + 1 })
  }

  decreaseScore1 = () => {
    if (this.state.score1 >= 1) {
      this.setState({ score1: this.state.score1 - 1 })
    } else {
      this.setState({ score1: 0 })
    }
  }

  decreaseScore2 = () => {
    if (this.state.score2 >= 1) {
      this.setState({ score2: this.state.score2 - 1 })
    } else {
      this.setState({ score2: 0 })
    }
  }

  nameChange1 = event => {
    this.setState({ team1Name: event.target.value })
  }

  nameSubmit1 = event => {
    console.log('A name was submitted: ' + this.state.team1Name)
    event.preventDefault()
  }

  nameChange2 = event => {
    this.setState({ team2Name: event.target.value })
  }

  nameSubmit2 = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <h1>My Score Board</h1>
        <Scoreboard 
          score1={this.state.score1}
          score2={this.state.score2}
          increaseScore1={this.increaseScore1}
          decreaseScore1={this.decreaseScore1}
          increaseScore2={this.increaseScore2}
          decreaseScore2={this.decreaseScore2}
          team1Name={this.state.team1Name}
          team2Name={this.state.team2Name}
          nameChange1={this.nameChange1}
          nameSubmit1={this.nameSubmit1}
          nameChange2={this.nameChange2}
          nameSubmit2={this.nameSubmit2}
        />
      </div>
    );
  }
}

export default App;
