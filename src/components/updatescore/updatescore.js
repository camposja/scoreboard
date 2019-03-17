import React, { Component } from 'react';
import './updatescore.css';

class Updatescore extends Component {
  render() {
    return (
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
    );
  }
}

export default Updatescore;