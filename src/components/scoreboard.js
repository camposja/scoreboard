import React, { Component } from 'react';
import Scorearea from './scorearea/scorearea';
import Updatescore from './updatescore/updatescore';
import './scoreboard.css';

class Scoreboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
        <div>
          <Scorearea
            score1={this.props.score1}
            score2={this.props.score2}
            team1Name={this.props.team1Name}
            team2Name={this.props.team2Name}
          />
          <Updatescore 
            increaseScore1={this.props.increaseScore1}
            decreaseScore1={this.props.decreaseScore1}
            increaseScore2={this.props.increaseScore2}
            decreaseScore2={this.props.decreaseScore2}
            nameChange1={this.props.nameChange1}
            nameSubmit1={this.props.nameSubmit1}
            nameChange2={this.props.nameChange2}
            nameSubmit2={this.props.nameSubmit2}
          />
        </div>   
    );
  }
}

export default Scoreboard;


