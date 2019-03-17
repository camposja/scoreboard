import React, { Component } from 'react';
import './scorearea.css';

class Scorearea extends Component {
  render() {
    return (
        <section class="score-area">
            <section class="team1">
                <h2>Team 1</h2>
                <p class="team1Score">10</p>
            </section>
            <section class="team2">
                <h2>Team 2</h2>
                <p class="team2Score">10</p>
            </section>
        </section>
    );
  }
}

export default Scorearea;