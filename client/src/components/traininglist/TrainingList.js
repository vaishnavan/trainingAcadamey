/* eslint-disable array-callback-return */
/* eslint-disable no-self-compare */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import { Button } from 'semantic-ui-react';
import Header from '../header/Header';
import TrainingDetailCard from '../trainingdetail/TrainingDetailCard';
import FilterCard from '../trainingfilter/FilterCard';
import TrainingForm from '../trainerform/TrainingForm';
import './traininglist.css';

class TrainingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainingData: [],
            show: false,
            trainingName: '',
            instituteName: '',
            startDate: '',
            endDate: '',
            status: '',
            skill: '',
            finalLearn: [],
            flag: true,
            notFound: '',
            loading: false
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        const timer = setTimeout(() => {
            Axios.get('trainings.json')
                .then((res) => {
                    this.setState({
                        trainingData: res.data,
                        loading: false
                    });
                    // console.log(this.state.trainingData)
                });
            const { trainingData } = this.state;
            this.setState({
                finalLearn: trainingData,
                loading: false
            })
        }, 1000)
        return () => clearTimeout(timer)
    }

    handleClick = () => {
        this.setState({
            show: true,
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    trainingInputData = (userInputData) => {
        console.log(userInputData);
    }

    handleEmpty = () => {
        this.setState({
            trainingName: '',
            instituteName: '',
            startDate: '',
            endDate: '',
            status: '',
            skill: '',
            notFound: '',
            flag: true
        });
    }
    handleSubmit = () => {
        const { trainingData, trainingName, instituteName,
            status, skill } = this.state;
        console.log({ trainingName })
        let learnFilter = trainingData;

        if (trainingName) {
            learnFilter = trainingData.filter((searchData) => searchData.trainingName.toLowerCase().includes(trainingName.toLowerCase()));
        }
        if (instituteName) {
            learnFilter = trainingData.filter((searchData) => searchData.institutionName.toLowerCase().includes(instituteName.toLowerCase()));
        }
        if (status) {
            learnFilter = trainingData.filter((searchData) => searchData.status.toLowerCase().includes(status.toLowerCase()));
        }
        if (skill) {

            // learnFilter = trainingData.map((searchData)=> searchData.skills.filter((data) => data.toLowerCase().includes(skill.toLowerCase())));
            // console.log("BEFORE:::", learnFilter);
            // const trainingObject = [];
            // trainingData.map((data) => {
            //     const skills = data.skills;
            //     skills.map((skill) => {
            //         if (skill === skill) {
            //             trainingObject.push(data);
            //         }
            //     });
            // });
            // learnFilter = trainingObject;
            // console.log("Learn filter ::: ", learnFilter);
        }
        console.log(learnFilter);
        if (learnFilter.length === 0) {
            this.setState({
                notFound: `We couldn't find a match for "${trainingName}${instituteName}". Please try another search.`
            })
        }

        this.setState({
            finalLearn: learnFilter,
            flag: false
        })
    }

    render() {
        const { finalLearn, show, trainingData, flag, notFound, loading } = this.state;

        return (
            <div>
                {loading && 
                <Loader 
                    className="loader"
                    type="Grid"
                    color="#002db3"
                    width={50}
                    height={50}
                />}
                {!loading &&
                    <div>
                        {show ?
                            <div>
                                <Header />
                                <TrainingForm />
                            </div>
                            :
                            <div>
                                <Header />
                                <div className="new_training">
                                    <Button onClick={this.handleClick} color="blue" >New training</Button>
                                </div>
                                <FilterCard handleChange={this.handleChange} handleEmpty={this.handleEmpty} handleSubmit={this.handleSubmit} />

                                {finalLearn.length === 0 ?
                                    <div className="notfound">
                                        <p> {notFound} </p>
                                    </div>
                                    :
                                    null
                                }

                                {
                                    flag ? <TrainingDetailCard trainData={trainingData} getData={this.trainingInputData} />
                                        : <TrainingDetailCard trainData={finalLearn} getData={this.trainingInputData} />
                                }

                            </div>
                        }
                    </div>
                }

            </div>
        );
    }
}

export default TrainingList;
