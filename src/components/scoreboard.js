import React, { Component } from 'react';
import Scorearea from './scorearea/scorearea';
import Updatescore from './updatescore/updatescore';
import './scoreboard.css';

class Scoreboard extends Component {
  render() {
    return (
        <body>
            <h1>My Score Board</h1>
            <Scorearea />
            <Updatescore />
        </body>   
    );
  }
}

export default Scoreboard;


