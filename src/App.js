import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { StylesProvider, MuiThemeProvider, CssBaseline } from '@material-ui/core';

import store from './application/store/store';
import theme from './styles/theme';

import AppContent from './AppContent';

import 'react-toastify/dist/ReactToastify.min.css';

export default function App({ appState }) {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <StylesProvider injectFirst>
                    <HashRouter>
                        <CssBaseline />
                        <AppContent appState={appState} />
                    </HashRouter>
                </StylesProvider>
            </MuiThemeProvider>
        </Provider>
    );
}
