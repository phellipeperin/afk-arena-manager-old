import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';

import firebaseConfig from './application/config/firebaseConfig';

import initService from './application/services/initService';

import App from './App';

Firebase.initializeApp(firebaseConfig);
Firebase.auth().onAuthStateChanged(async (user) => {
    const appState = await initService.getAppState(user);
    ReactDOM.render(<App appState={appState} />, document.getElementById('app'));
});
