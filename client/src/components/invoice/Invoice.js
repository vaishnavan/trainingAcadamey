/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './invoice.css';

class Invoice extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loading:false
    }
  }
  
  
  render() {
    const { invoiceData } = this.props;
    let count = 0;
    invoiceData.trainers.map((item) => {
      if (item.type === 'Support') {
        count += 1;
      }
    });
    return (
      <div>
        <div className="invoice_card">
          <div className="invoice_data">
            <Table celled fixed singleLine>
              <Table.Row>
                <Table.Cell className="heading">Training Name</Table.Cell>
                <Table.Cell> {invoiceData.trainingName} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Institution Name</Table.Cell>
                <Table.Cell> {invoiceData.institutionName} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Start Date</Table.Cell>
                <Table.Cell> {invoiceData.startDate} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">End Date</Table.Cell>
                <Table.Cell> {invoiceData.endDate} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Learner Count</Table.Cell>
                <Table.Cell> {invoiceData.learnerCount} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Trainer Count</Table.Cell>
                <Table.Cell> {invoiceData.trainers.length} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Support Staff</Table.Cell>
                <Table.Cell> {count} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Contact Number</Table.Cell>
                <Table.Cell> {invoiceData.contactNumber} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Location</Table.Cell>
                <Table.Cell> {invoiceData.location} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">SPOC</Table.Cell>
                <Table.Cell> {invoiceData.spoc} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Estimated Cost Per Learner</Table.Cell>
                <Table.Cell> Rs.{invoiceData.estimatedCostPerLearner} </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="heading">Skills</Table.Cell>
                <Table.Cell className="skill_occured"> {invoiceData.skills+","} </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
