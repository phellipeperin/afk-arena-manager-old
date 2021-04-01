import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ToastContainer, Slide } from 'react-toastify';

import Routes from './application/routes/routes';
import { setFriendList } from './application/store/modules/friend/actions';
import { setAdminHeroes, setPlayerHeroes } from './application/store/modules/hero/actions';
import { setUser, setUserRoles } from './application/store/modules/user/actions';

import MainHeader from './components/MainHeader/MainHeader';
import Loading from './components/Loading/Loading';

import 'react-toastify/dist/ReactToastify.min.css';

export default function App({ appState }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(setUser(appState.user));
        if (appState.user && appState.user.uid) {
            dispatch(setUserRoles(appState.userConfig.roles));
            dispatch(setAdminHeroes(appState.adminHeroes));
            dispatch(setPlayerHeroes(appState.user.uid, appState.playerHeroes));
            dispatch(setFriendList(appState.userFriends));
        }

        setLoading(false);
    }, [appState]);

    if (loading) return <div className='h-screen'><Loading /></div>;
    return (
        <>
            <MainHeader />
            <Container
                fixed
                className='container'
            >
                <section className='main-content'>
                    <Routes
                        user={appState.user}
                        userRoles={appState.userConfig && appState.userConfig.roles}
                    />
                    <ToastContainer
                        pauseOnHover
                        hideProgressBar
                        closeOnClick
                        closeButton={false}
                        autoClose={5000}
                        position='bottom-right'
                        transition={Slide}
                    />
                </section>
            </Container>
        </>
    );
}
