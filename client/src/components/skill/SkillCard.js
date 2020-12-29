/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './skillcard.css';

export class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    // console.log(skill)
    return (
      <div>
        <div className="skillcard">
          <h3>Skill on demand</h3>
          <div className="skill_occur">
            <img src={skill.image} alt="no" width="50" height="50" />
            <h3> {skill.name} </h3>
            <p> {skill.trainingCount} trainings in past {skill.duration} {skill.timePeriod} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillCard;
