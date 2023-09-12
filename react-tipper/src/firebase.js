// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjWnhTW368hSRvYkU0pB2oxPiKxGYPmoM",
    authDomain: "no-cash-tipper-beta.firebaseapp.com",
    projectId: "no-cash-tipper-beta",
    storageBucket: "no-cash-tipper-beta.appspot.com",
    messagingSenderId: "328797443864",
    appId: "1:328797443864:web:0576a1a5dbf38d8828b06d",
    measurementId: "G-5XY3HNW5BL",
    databaseURL: "https://no-cash-tipper-beta-default-rtdb.firebaseio.com/",
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();

export default app;
