/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import MetricCard from '../metric/MetricCard';
import ActiveTrainerCard from '../activetrainer/ActiveTrainerCard';
import SkillCard from '../skill/SkillCard';
import Header from '../header/Header';
import BarChart from '../barchart/BarChart';
import TrainingDetailCard from '../trainingdetail/TrainingDetailCard';
import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardData: [],
      trainingData: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    const timer = setTimeout(() => {
      Axios.get('dasboard.json')
        .then((res) => {
          this.setState({
            dashboardData: [res.data],
            loading: false
          });
        });
      Axios.get('trainings.json')
        .then((res) => {
          this.setState({
            trainingData: res.data,
            loading: false
          });
        });
    }, 1000)
    return () => clearTimeout(timer);

  }

  render() {
    const { dashboardData, trainingData, loading } = this.state;
    return (
      <div>
        {loading && 
        <Loader
          className="loader" 
          type="Grid"
          color="#002db3"
          height={50}
          width={50} 
        />}
        {!loading &&
          <div>
            <Header />
            {dashboardData.map((value) => (
              <>
                <div className="metric_cardAlign">
                  <div className="card_Data1">
                    <MetricCard count={value.metricsData.Completed} status="Compelted" />
                  </div>
                  <div className="card_Data2">
                    <MetricCard count={value.metricsData.Ongoing} status="Ongoing" />
                  </div>
                  <div className="card_Data3">
                    <MetricCard count={value.metricsData.Upcoming} status="Upcoming" />
                  </div>
                  <div className="card_Data4">
                    <MetricCard count={value.metricsData.PendingForApproval} status="Pending For Approval" />
                  </div>
                </div>
                <div className="active_card">
                  <div className="skill_card1">
                    <ActiveTrainerCard total={value.trainersCount.total} active={value.trainersCount.active} />
                  </div>
                  <div className="skill_card2">
                    <SkillCard skill={value.skill} />
                  </div>
                  <div className="skill_card3">
                    <BarChart graph={value.yearlyStatistics} />
                  </div>
                </div>
              </>
            ))} <br />
            <TrainingDetailCard trainData={trainingData} />
          </div>

        }

      </div>
    );
  }
}

export default Dashboard;
