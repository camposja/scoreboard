import React, { Component } from 'react';
import './updatescore.css';

class Updatescore extends Component {
    constructor(props) {
        super(props)
        this.state = {}
      }

  render() {
    return (
        <section className="update-score">
            <section className="team1">
                <section className="team-name">
                    update team 1 name
                    <input type="text" />
                    <button className="update-team-1-name">Update</button>
                </section>
                <section>
                    update team 1 score
                    <button 
                    className="team-1-add-1-button"
                    onClick={this.props.increaseScore1}
                    >
                        add 1
                    </button>
                    <button 
                    className="team-1-subtract-1-button"
                    onClick={this.props.decreaseScore1}
                    >
                        subtract 1
                    </button>
                </section>
            </section>
            <section className="team2">
                <section className="team-name">
                    update team 2 name
                    <input type="text" />
                    <button>Update</button>
                </section>
                <section>
                    update team 2 score
                    <button onClick={this.props.increaseScore2} >add 1</button>
                    <button onClick={this.props.decreaseScore2} >subtract 1</button>
                </section>
            </section>
        </section>
    );
  }
}

export default Updatescore;