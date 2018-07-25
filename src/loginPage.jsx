import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'

//UIパーツ
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import MypageIcon from '@material-ui/icons/Person';
import RankingIcon from '@material-ui/icons/Star';
import FolderIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';

//Firebase
//import firebase from 'firebase';
var firebase = require("firebase/app");
require("firebase/auth");

//CSS
var loginPageCSS = {
    bottomTab: {
        zIndex:'5',
        position: 'fixed',
        width: window.innerWidth,
        bottom: 0,
    },
    div: {
        width:'100%',
        position:'absolute',
        top: window.innerHeight * 0.3,
    },
    signinDiv: {
        width: '100%',
        position: 'absolute',
        top: window.innerHeight * 0.1,
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

    //下のタブで切り替えられた
    handleChange = (event, value) => {
        this.setState({ value });
    };

    state = {
        value:0,
        email: '',
        password: '',
        confirmPassword:'',
    };

    onClickedLogin = () => {
        console.log("LOGIN!");
        this.props.history.push("/");
    }

    onChangeEmail = event => {
        this.setState({ email: event.target.value });
       console.log(event.target.value);
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value });
        console.log(this.state.password);
    }

    //index.htmlの中身的な
    render() {
        const { value } = this.state;
     

        return (
            <div>
                <div style={loginPageCSS.bottomTab}>
                    <Divider />
                    <Divider />
                    <Divider />
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                    >
                        <BottomNavigationAction label="Log in" icon={<HomeIcon />} />
                        <BottomNavigationAction label="Sign in" icon={<FolderIcon />} />
                    </BottomNavigation>
                </div>
                {value === 0 && <Login history={this.props.history} />}
                {value === 1 && <Signin history={this.props.history} />}
            </div>
           
        );
    }
}

class Login extends React.Component {   
    state = {
        email: '',
        password: '',
    };

    onClickedLogin = () => {
        console.log("LOGIN!");
        this.props.history.push("/");
    }

    onChangeEmail = event => {
        this.setState({ email: event.target.value });
        //console.log(event.target.value);
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value });
        //console.log(this.state.password);
    }

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
                <br />
                <TextField
                      id="password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                        onChange={this.onChangePassword}
                        style={loginPageCSS.input}
                 />
                <br />
                <Button color="secondary" variant="contained" onClick={this.onClickedLogin} style={loginPageCSS.button}>Login</Button>
            </div>
        );
    }
}

class Signin extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    onClickedSignin = () => {

        //------------------------------------------------------------------------------

        console.log("SIGN IN!");

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function (error) {
                if (error) {
                    console.error('Error(' + error.code + '): ' + error.message);
                }
            });
        //this.props.history.push("/");
    }

    onChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value });
    }

    onChangeConfirm = event => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div style={loginPageCSS.signinDiv}>
                <p style={loginPageCSS.text}>　登録   </p>

                <TextField
                    id="emailaddress-input-sign"
                    label="email"
                    type="email"
                    autoComplete="current-email"
                    onChange={this.onChangeEmail}
                    style={loginPageCSS.input}
                />
                <br />
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.onChangePassword}
                    style={loginPageCSS.input}
                />
                <br />
                <TextField
                    id="confirm-input"
                    label="confirm the password"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.onChangeConfirm}
                    style={loginPageCSS.input}
                />
 
                <br />
                <Button color="secondary" variant="contained" onClick={this.onClickedSignin} style={loginPageCSS.button}>Sign in</Button>
                <br />
            </div>
        );
    }
}

export default withRouter(LoginPage);