import React from 'react';
import Firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar } from '@material-ui/core';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import LocationSearchIcon from '@material-ui/icons/LocationSearchingOutlined';

import logo from '../../assets/images/system/logo.png';

import MainHeaderMenu from './MainHeaderMenu';

import './main-header.scss';

export default function MainHeader() {
    const history = useHistory();
    const { user, userRoles } = useSelector((state) => state.user || {});

    const goToPage = (page) => {
        history.push(page);
    };

    const logout = () => {
        Firebase.auth().signOut().then(() => {
            history.push('/');
        });
    };

    const adminMenuList = [
        {
            label: '',
            itemList: [
                { label: 'Heroes', action: goToPage, actionParam: '/admin/hero-list', icon: <LayersOutlinedIcon fontSize='small' /> },
            ],
        },
    ];
    const playerMenuList = [
        {
            label: '',
            itemList: [
                { label: 'Heroes', action: goToPage, actionParam: '/player/hero-list', icon: <LayersOutlinedIcon fontSize='small' /> },
                { label: 'Statistics', action: goToPage, actionParam: '/player/statistics', icon: <EqualizerOutlinedIcon fontSize='small' /> },
                { label: 'Missing Info', action: goToPage, actionParam: '/player/missing-info', icon: <LocationSearchIcon fontSize='small' /> },
                { label: 'Friends', action: goToPage, actionParam: '/player/friends', icon: <PeopleAltOutlinedIcon fontSize='small' /> },
            ],
        },
    ];
    const accountMenuList = [
        {
            label: 'Account',
            itemList: [
                { label: 'Profile', action: goToPage, actionParam: '/profile', icon: <AccountCircleOutlinedIcon fontSize='small' /> },
                { label: 'Change Password', action: goToPage, actionParam: '/change-password', icon: <LockOutlinedIcon fontSize='small' /> },
                { label: 'Sign-out', action: logout, icon: <ExitToAppOutlinedIcon fontSize='small' /> },
            ],
        },
        {
            label: 'Help',
            itemList: [
                { label: 'Road Map', action: goToPage, actionParam: '/road-map', icon: <OutlinedFlagIcon fontSize='small' /> },
                { label: 'About', action: goToPage, actionParam: '/about', icon: <InfoOutlinedIcon fontSize='small' /> },
                { label: 'Credits', action: goToPage, actionParam: '/credits', icon: <CopyrightOutlinedIcon fontSize='small' /> },
            ],
        },
    ];

    return (
        <AppBar
            position='static'
            className='main-header'
        >
            <Toolbar>
                <img
                    src={logo}
                    alt='logo'
                    className='main-header-logo'
                />
                <h4 className='text-uppercase mr-auto'>Manager</h4>
                {user && user.uid && (
                    <>
                        {(userRoles || []).includes('ADMIN') && (
                            <MainHeaderMenu
                                text='Admin'
                                list={adminMenuList}
                            />
                        )}
                        <MainHeaderMenu
                            text='Player'
                            list={playerMenuList}
                        />
                        <MainHeaderMenu
                            text='Profile'
                            list={accountMenuList}
                        />
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}
