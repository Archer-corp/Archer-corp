﻿import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

export default class ContentPage extends React.Component {
    render() {
        //let viewText = "テストページ";
        return (
            <div>
                <p>このページはContentです。</p>
            </div>
        )
    }
}