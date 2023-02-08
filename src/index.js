import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEiXp9T2Xq60-99GiWyKI7vF89rlCHvTU",
  authDomain: "coderhouse-proyect-78e88.firebaseapp.com",
  projectId: "coderhouse-proyect-78e88",
  storageBucket: "coderhouse-proyect-78e88.appspot.com",
  messagingSenderId: "381354946133",
  appId: "1:381354946133:web:6ad3cab4e24910769d2edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
