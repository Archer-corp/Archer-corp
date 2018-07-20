import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link,
} from "react-router-dom";


export default class MyPage extends React.Component {
    render() {
        //let viewText = "テストページ";
        return (
            <div>
                <p>このページはMyPageです。</p>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}