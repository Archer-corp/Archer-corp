import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//CSS
var loginPageCSS = {
    div: {
        width:'100%',
        position:'absolute',
        top: window.innerHeight * 0.3,
    },
    text: {
        width:'4em',
        margin:'0 auto',
    },
    input: {
        display: 'flex',
        width: '80%',
        margin: '0 auto',
    },
    button: {
        width:'30%',
        left:window.innerWidth*0.6  ,
    },
};

class LoginPage extends React.Component {
    state = {
        email: '',
        password:'',
    };

    onClickedLogin = () => {
        console.log("LOGIN!");
        this.props.history.push("/");
    }

    onChangeEmail = event => {
        this.setState({ email: event.target.value });
       // console.log(event.target.value);
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value });
        //console.log(this.state.password);
    }

    //index.htmlの中身的な
    render() {
        return (
            <div style={loginPageCSS.div}>
                <p style={loginPageCSS.text}>ログイン</p>

                <TextField
                    id="emailaddress-input"
                    label="email"
                    type="email"
                    autoComplete="current-email"
                    onChange={this.onChangeEmail}
                    style={loginPageCSS.input}
               />
                <br/>
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.onChangePassword}
                    style={loginPageCSS.input}
                />
                <br/>
                <Button color="secondary" variant="contained" onClick={this.onClickedLogin} style={loginPageCSS.button}>Login</Button>
            </div>
        );
    }
}

export default withRouter(LoginPage);