import React, { Component } from 'react';
import './scorearea.css';

class Scorearea extends Component {
    constructor(props) {
        super(props)
        this.state = {}
      }

  render() {
    return (
        <section className="score-area">
            <section className="team1">
                <h2>{this.props.team1Name}</h2>
                <p className="team1Score">{this.props.score1}</p>
            </section>
            <section className="team2">
                <h2>Team 2</h2>
                <p className="team2Score">{this.props.score2}</p>
            </section>
        </section>
    );
  }
}

export default Scorearea;
