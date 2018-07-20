import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//CSS
var loginPageCSS = {

};

class LoginPage extends React.Component {

    onClickedLogin=function(){
        console.log("LOGIN!");
    }

    //index.htmlの中身的な
    render() {
        return (
            <div>
                <p>ログイン</p>

                <TextField
                    id="emailaddress-input"
                    label="email"
                    type="email"
                    autoComplete="current-email"
                    margin="normal"
                />

                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <Button color="secondary" variant="contained" onClick={this.onClickedLogin}>Login</Button>
            </div>
        );
    }
}

export default (LoginPage);