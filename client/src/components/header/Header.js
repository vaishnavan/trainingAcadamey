import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { createBrowserHistory } from 'history';
import './header.css';

const history = createBrowserHistory();

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cid: '',
        };
    }
    handleClick = (id) => {
        this.setState({
            cid: id,
        });
    }
    handleLogOut = () => {
        history.push('/login');
    }

    render() {
        const { cid } = this.state;
        return (
            <div>
                <form>
                    <div className="headerSection">
                        <div className="header_logo">
                            <h3>Training Academy</h3>
                        </div>
                        <div className="header_link">
                            <Link onClick={() => this.handleClick('dashboard')} className={cid === 'dashboard' ? 'active' : ''} id="dashboardLink" to="/dashboard">Dashboard</Link>
                            <Link onClick={() => this.handleClick('training')} className={cid === 'training' ? 'active' : ''} id="trainingsLink" to="/trainings">Trainings</Link>
                        </div>
                        <div className="header_logoOut">
                            <Button onClick={this.handleLogOut} color="black" id="logoutButton">Logout</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Header;
