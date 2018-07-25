import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';


//FIREBASE
import firebase from 'firebase';
import { config } from './config.js';
export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();