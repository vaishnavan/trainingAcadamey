/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './metricCard.css';

class MetricCard extends Component {
  render() {
    const { count, status } = this.props;
    return (
      <div>
        <div className="metric_card">
          <div className="card">
            <p className="metric_count"> {count} </p>
            <h3 className="metric_status"> {status} </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MetricCard;
