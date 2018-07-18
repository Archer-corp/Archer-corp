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

//別のソースをインポート
import HomePage from './home.jsx';
import RankingPage from './ranking.jsx';
import MyPage from './myPage.jsx';
import ContentPage from './content.jsx';


export const myTheme = createMuiTheme({

    palette: {
        primary: { main: orange[700] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },

});

//CSS
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

    //index.htmlの中身的な
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


                {value === 0 && <HomePage /> }

                {value === 1 && <ContentPage />}
                {value === 2 && <RankingPage/>}
            {value === 3 && <MyPage/>}
                
            </MuiThemeProvider>
        );
    }
}

Archer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Archer);