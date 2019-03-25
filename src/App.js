import React, { Component } from 'react';
import Scoreboard from './components/scoreboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team1Name: "Team 1",
      team2Name: "Team 2",
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
    this.setState({ teamName1: event.target.value })
  }

  nameSubmit1 = event => {
    event.preventDefault()
  }

  nameChange2 = event => {
    this.setState({ teamName2: event.target.value })
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
        />
      </div>
    );
  }
}

export default App;
