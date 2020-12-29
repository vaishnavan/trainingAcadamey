/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './barchart.css';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      count: [],
    };
  }

  componentDidMount() {
    const { labels, count } = this.state;
    const { graph } = this.props;
    const array = labels;
    const array1 = count;

    graph.map((data) => {
      array.push(data.name);
      array1.push(data.count);
      this.setState({
        labels: array,
        count: array1,
      });
    });
  }

  render() {
    const { labels, count } = this.state;
    const data = {
      labels: [labels[0], labels[1], labels[2], labels[3], labels[3], labels[4], labels[5], labels[6], labels[7], labels[8], labels[9], labels[10], labels[11]],
      datasets: [
        {
          label: 'Training Count for past 12 months',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [count[0], count[1], count[2], count[3], count[3], count[4], count[5], count[6], count[7], count[8], count[9], count[10], count[11]],
        },
      ],
    };
    return (
      <div>
        <div className="bar_chart">
          <Line width={600} height={250} data={data} />
        </div>
      </div>
    );
  }
}

export default BarChart;
