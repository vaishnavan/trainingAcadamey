import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Invoice from '../invoice/Invoice';
import Trainer from '../trainer/Trainer';
import './trainingdetail.css';

class TrainingDetailCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
    }

    handleDrop = (i) => {
        const { show } = this.state;
        this.setState({
            show: {
                // ...show,
                [i]: !show[i],
            },
        });
    }

    render() {
        const { trainData } = this.props;
        const { show } = this.state;
        console.log(trainData);
        return (
            <div>
                {trainData.map((values, i) => {
                    let count = 0;
                    values.trainers.map((item) => {
                        if (item.type === 'Support') {
                                count += 1;
                        }  
                    });
                    return (
                        <>
                            <div className="status_head">
                                <h2> {values.status} </h2>
                            </div>
                            <div className="training_card">
                                <div className="trainig_head">
                                    <div className="training_left">
                                        <h2> {values.trainingName} </h2>
                                        <h3 style={{ color: 'rgb(158, 155, 155)' }}> {values.institutionName}</h3>
                                    </div>
                                    {
                                        values.status === 'Pending For Approval'?<div style={{ color: 'orange' }} className="training_right"><p> {values.status} </p></div> : null
                                    }
                                    {
                                        values.status === 'Completed' ?
                                            <div style={{ color: 'green' }} className="training_right">
                                                <p> {values.status} </p>
                                            </div>
                                            :
                                            null
                                    }
                                    {
                                        values.status === 'Ongoing' ?
                                            <div style={{ color: 'blue' }} className="training_right">
                                                <p> {values.status} </p>
                                            </div>
                                            :
                                            null
                                    }
                                    {
                                        values.status === 'Upcoming' ?

                                            <div className="training_right">
                                                <p> {values.status} </p>
                                            </div>
                                            :
                                            null
                                    }

                                    {/* // <div className={"training_right" + (i + 1)}>
                                        //     <p  > {values.status} </p>
                                    // </div> */}
                                </div>
                                <div className="training_learn">
                                    <div className="training_learndetail">
                                        <p><Icon size="large" name="users" /> {values.learnerCount} Learners </p>
                                    </div>
                                    <div className="training_learndetail">
                                        <p><Icon size="large" name="user outline" /> {values.trainers.length} Trainers </p>
                                    </div>
                                    <div className="training_learndetail">
                                        <p><Icon size="large" name="user" /> {count} Support Staff </p>
                                    </div>
                                    <div className="training_learndetail">
                                        <p><Icon size="large" name="calendar alternate outline" /> Starts On {values.startDate} </p>
                                    </div>
                                    <div className="training_learndetail">
                                        <p><Icon size="large" name="calendar alternate outline" /> Ends On {values.endDate} </p>
                                    </div>
                                    <div className="training_learndetail">
                                        <p><Icon size="large" name="map marker alternate" /> {values.location} </p>
                                    </div>
                                </div>
                                <div className="training_learn">
                                    <div className="training_learndata">
                                        <p>{values.skills[0]}</p>
                                    </div>
                                    <div className="training_learndata">
                                        <p>{values.skills[1]}</p>
                                    </div>
                                    <div className="training_learndata">
                                        <p>{values.skills[2]}</p>
                                    </div>
                                </div>
                                {show[i] ?
                                    <div>
                                        <div className="toggle_btn">
                                            <Button id={"btn"+ i} onClick={() => this.handleDrop(i)} ><Icon className="btn_icon" size="large" name='angle down' /></Button>
                                        </div>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Trainers</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Invoice</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active spot" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                 <Trainer trainersData={values} />
                                            </div>
                                            <div className="tab-pane fade spot" id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                                                 <Invoice invoiceData={values} />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className="toggle_btn">
                                            <Button id={"btn" + i} onClick={() => this.handleDrop(i)}><Icon className="btn_icon" size="large" name="angle right" /></Button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </>
                    );
                })}
            </div>
        );
    }
}

export default TrainingDetailCard;
