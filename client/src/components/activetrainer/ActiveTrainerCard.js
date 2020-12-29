/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './activeCard.css';

class ActiveTrainerCard extends Component {
  render() {
    const { total, active } = this.props;
    return (
      <div>
        <div className="active_trainer">
          <h3>Active Trainers</h3>
          <div className="active_trainerCard">
            <div className="active_data">
              <h2>{active}/<span>{total}</span> </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveTrainerCard;
