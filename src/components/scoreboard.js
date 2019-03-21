import React, { Component } from 'react';
import Scorearea from './scorearea/scorearea';
import Updatescore from './updatescore/updatescore';
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
                <Scorearea />
                <Updatescore />
                <script src="/main.js" charset="utf-8"></script>
            </body>
        </html>
    );
  }
}

export default Scoreboard;


