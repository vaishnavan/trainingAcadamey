/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="welcome_greet">
          <div className="content">
            <h1>Welcome to Training Acadamey</h1>
            <span>Click here to </span><Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
