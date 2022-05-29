// import React, { createContext } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import firebase from 'firebase';
// import 'firebase/firestore'
// import 'firebase/auth'
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBhO-e6Egslm3pkfvjMb5jEbQkG3BY6X7Q",
//   authDomain: "diet-diary-v4mp.firebaseapp.com",
//   databaseURL: "https://diet-diary-v4mp-default-rtdb.firebaseio.com",
//   projectId: "diet-diary-v4mp",
//   storageBucket: "diet-diary-v4mp.appspot.com",
//   messagingSenderId: "1059264966562",
//   appId: "1:1059264966562:web:fa5dff820ae3888d748cfb",
//   measurementId: "G-EP1YQS0HNC"
// };

// const app = initializeApp(firebaseConfig);

// const Context = createContext(null)

// const auth = firebase.auth()
// const firestore = firebase.firestore()


ReactDOM.render(
  // <Context.Provider value={{
  //   firebase,
  //   auth,
  //   firestore,
  // }}>

    <App />,
    
  // </Context.Provider>,
  document.getElementById('root')
);
