import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

//別のソースをインポート
import './App.css';
import MainPage from './mainPage.jsx'
import LoginPage from './loginPage.jsx';

import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import {
    BrowserRouter,
    Route
} from "react-router-dom";
import loginPage from './loginPage';


export const myTheme = createMuiTheme({

    palette: {
        primary: { main: orange[700] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },

});

//CSS
const styles = {

};

class Archer extends React.Component {

    //index.htmlの中身的な
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={myTheme}>

                    <Route exact path="/" component={MainPage} />
                    <Route path="/login" component={loginPage} />

                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

Archer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Archer);