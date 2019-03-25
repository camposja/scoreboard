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
          />
          <Updatescore 
            increaseScore1={this.props.increaseScore1}
            decreaseScore1={this.props.decreaseScore1}
            increaseScore2={this.props.increaseScore2}
            decreaseScore2={this.props.decreaseScore2}
          />
        </div>   
    );
  }
}

export default Scoreboard;


