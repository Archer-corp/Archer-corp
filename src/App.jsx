import logo from './logo.svg';
import './App.css';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import MypageIcon from '@material-ui/icons/Person';
import RankingIcon from '@material-ui/icons/Star';
import FolderIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
//import { theme } from '../../assets/theme';

import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import Button from '@material-ui/core/Button';

import HomeComponent from './home.jsx';

export const myTheme = createMuiTheme({

    palette: {
        primary: { main: orange[700] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },

});

const styles = {
    root: {
        position:'fixed',
        width: window.innerWidth,
        bottom: 0,
        color:'red',
    },
};

class Archer extends React.Component {
    state = {

        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <MuiThemeProvider theme={myTheme}>
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />}/> 
                <BottomNavigationAction label="Content" icon={<FolderIcon />} />
                <BottomNavigationAction label="Ranking" icon={<RankingIcon />} />
                <BottomNavigationAction label="My page" icon={<MypageIcon />} />
                </BottomNavigation>


                {value === 0 && <HomeComponent /> }

            {value === 1 && <p>保存したコンテンツ</p>}
            {value === 2 && <p>ランキング</p>}
            {value === 3 && <p>マイページ</p>}
                
            </MuiThemeProvider>
        );
    }
}

Archer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Archer);