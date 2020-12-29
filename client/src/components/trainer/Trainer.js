/* eslint-disable array-callback-return */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './trainers.css';

export class Trainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      finalData: this.props.trainersData,
      flag: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    const timer = setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
    return () => clearTimeout(timer);
  }

  typeChangeHandle = (e, type, name, id) => {

    console.log(name);
    console.log(type);
    const { finalData } = this.state
    finalData.trainers.map((data) => {
      if (data.name === name) {
        data.type = type;
      }
    })

    this.setState({
      flag: !this.state.flag
    })
    console.log(finalData);

  }

  render() {
    const { finalData, loading } = this.state;
    // console.log(trainersData);
    return (
      <>
        {loading && 
        <Loader 
          className="loaders"
          type="ThreeDots"
          color="#002db3"
          width={50}
          height={50}
        />}
        {!loading &&
          <div className="tainers_head">
            <div className="trainers_card">
              <div className="trainers_select">
                <div className="select_bar">
                  <select>
                    <option value="eg.sakthi" disabled selected>eg.sakthi</option>
                    <option>Sakthi</option>
                    <option>RamKumar</option>
                    <option>Karthi</option>
                    <option>Ramya</option>
                    <option>Kannan</option>
                  </select>
                </div>
                <div className="select_add">
                  <button>Add</button>
                </div>
              </div>
            </div>
            <div className="trainer_deatail">
              {finalData.trainers.map((data, index) => (
                <>
                  <div className="trainer_detailCard">
                    <div className="trainer_name">
                      <h4>{data.name}</h4>
                    </div>
                    <div className="trainer_skill">
                      <div className="skill_data">
                        {data.skills.map((skill) => (
                          <>
                            <div> {skill} </div>
                          </>
                        ))}
                      </div>

                    </div>
                    <div className="trainer_type">
                      {
                        data.type === "None" ? <div className="type_cover" onClick={(e) => this.typeChangeHandle(e, "None", data.name, index)}>None</div>
                          : <div onClick={(e) => this.typeChangeHandle(e, "None", data.name, index)} >None</div>
                      }

                      {
                        data.type === "Delivery" ? <div className="type_cover" onClick={(e) => this.typeChangeHandle(e, "Delivery", data.name, index)}>Delivery</div>
                          : <div onClick={(e) => this.typeChangeHandle(e, "Delivery", data.name, index)}>Delivery</div>
                      }

                      {
                        data.type === "Support" ? <div className="type_cover" onClick={(e) => this.typeChangeHandle(e, "Support", data.name, index)}>Support</div>
                          : <div onClick={(e) => this.typeChangeHandle(e, "Support", data.name, index)}>Support</div>
                      }
                    </div>
                  </div>

                </>
              ))}

            </div>
          </div>
        }

      </>
    );
  }
}

export default Trainer;
