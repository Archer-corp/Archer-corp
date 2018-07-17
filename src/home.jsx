import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

export default class HomeComponent extends React.Component {
    render() {
        //let viewText = "テストページ";
        return (
            <div>
                <h1>Hello! World.</h1>
                <p>このページはです。</p>
            </div>
        )
    }
}