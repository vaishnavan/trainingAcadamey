import React, { Component } from 'react';
import Cookies from 'universal-cookie';
// import { createBrowserHistory } from 'history';
import './login.css';

// const history = createBrowserHistory();

class Login extends Component {
    constructor(props) {
        super(props);
        this.createRef = React.createRef();
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    componentDidMount(){
        this.createRef.current.focus();
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        // this.createRef.current.focus();
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (e) => {
        
        const { email, password } = this.state;
        if (email === '' || password === '') {
            // e.preventDefault();
            this.setState({
                error: 'All fields are required',
            });
        } else {
            this.setState({
                error: '',
            });
            console.log(email);
            console.log(password);
            const cookies = new Cookies();
            cookies.set('Email', email);
            cookies.set('Password', password);
            this.props.history.push('/dashboard');
        }
    }

    render() {
        const { error } = this.state;
        return (
            <>
                <div className="login">
                    <div className="card_container">
                        <div className="card_left">
                            <form autoComplete="off">
                                <h1>Login</h1>
                                <div className="form_input">
                                    <input type="text" placeholder="Email" name="email" ref={this.createRef} onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="form_input">
                                    <input type="password" placeholder="Password" name="password" onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="login_err">
                                    <span>{ error }</span>
                                </div>
                                <div className="login_btn">
                                    <button id="loginButton" onClick={this.handleSubmit} type="submit">LOG IN</button>
                                </div>
                            </form>
                        </div>
                        <div className="card_right">
                            <h1>Training Academy</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
