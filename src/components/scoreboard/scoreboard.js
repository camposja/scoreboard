import React, { Component } from 'react';
// import Scorearea from './components/scorearea/scorearea';
// import Updatescore from './components/updatescore/updatescore';
import './scoreboard.css';

class Scoreboard extends Component {
  render() {
    return (
        <html className="App">
            <head lang="en">
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Scoreboard</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/screen.css" />
            </head>
            <body>
                <h1>My Score Board</h1>
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
                <section class="update-score">
                    <section class="team1">
                        <section class="team-name">
                            update team 1 name
                            <input type="text" />
                            <button class="update-team-1-name">Update</button>
                        </section>
                        <section>
                            update team 1 score
                            <button class="team-1-add-1-button">add 1</button>
                            <button class="team-1-subtract-1-button">subtract 1</button>
                        </section>
                    </section>
                    <section class="team2">
                        <section class="team-name">
                            update team 2 name
                            <input type="text" />
                            <button>Update</button>
                        </section>
                        <section>
                            update team 2 score
                            <button>add 1</button>
                            <button>subtract 1</button>
                        </section>
                    </section>
                </section>
                <script src="/main.js" charset="utf-8"></script>
            </body>
        </html>
    );
  }
}

export default Scoreboard;


