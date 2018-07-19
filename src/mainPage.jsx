import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MypageIcon from '@material-ui/icons/Person';
import RankingIcon from '@material-ui/icons/Star';
import FolderIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';

import HomePage from './home.jsx';
import RankingPage from './ranking.jsx';
import MyPage from './myPage.jsx';
import ContentPage from './content.jsx';

//UIパーツ
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';

//CSS
var mainPageCSS = {
    bottomTab: {
        position: 'fixed',
        width: window.innerWidth,
        bottom: 0,
    },

};

class MainPage extends React.Component {
    //最初は一番左のタブ
    state = {
        value: 0,
    };

    //下のタブで切り替えられた
    handleChange = (event, value) => {
        this.setState({ value });
    };

    //index.htmlの中身的な
    render() {
        const { value } = this.state;

        return (
            <div>
                <div style={mainPageCSS.bottomTab}>
                    <Divider />
                    <Divider />
                    <Divider />
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                    >
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction label="Content" icon={<FolderIcon />} />
                        <BottomNavigationAction label="Ranking" icon={<RankingIcon />} />
                        <BottomNavigationAction label="My page" icon={<MypageIcon />} />
                    </BottomNavigation>
                </div>

                {value === 0 && <HomePage />}
                {value === 1 && <ContentPage />}
                {value === 2 && <RankingPage />}
                {value === 3 && <MyPage />}
            </div>
        );
    }
}

export default (MainPage);