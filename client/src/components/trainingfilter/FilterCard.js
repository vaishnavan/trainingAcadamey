/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './filtercard.css';

class FilterCard extends Component {
  render() {
    const { handleChange, handleEmpty, handleSubmit } = this.props;
    return (
      <div>
        <div className="filter_head">
          <h2>Trainings</h2>
        </div>
        <div className="filter_card">
          <Form autocomplete="off">
            <Form.Group widths="5">
              <Form.Input
                fluid label="Training name" name="trainingName" placeholder="eg java Training"
                onChange={handleChange}
              />
              <Form.Input
                fluid label="Institution name" name="instituteName" placeholder="eg EboxColleges"
                onChange={handleChange}
              />
              <Form.Input type="date" label="Start Date" name="startDate" onChange={handleChange} />
              <Form.Input type="date" label="End Date" name="endDate" onChange={handleChange} />
              <div className="select_status">
                <label>status</label>
                <select style={{ marginTop: '5px' }} name="status" onChange={handleChange}>
                  <option>Select Status</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Pending For Approval">Pending For Approval</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group widths="1">
              <div className="select_skill">
                <label>Skills</label>
                <select style={{ marginTop: '5px' }} name="skill" onChange={handleChange}>
                  <option>Select Skill</option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="Datastructures">Datastructures</option>
                  <option value="Algorithms">Algorithms</option>
                  <option value="OOPS">OOPS</option>
                </select>
              </div>
            </Form.Group>
            <div className="filter_btn">
              <Button type="reset" onClick={handleEmpty} color="black">Clear</Button>
              <Button color="blue" onClick={handleSubmit}>Search</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default FilterCard;
