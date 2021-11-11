import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBYMOEywFvSGvEpeLZR-DgLaGfUXvE1r0M",
  authDomain: "letmeask-5667d.firebaseapp.com",
  databaseURL: "https://letmeask-5667d-default-rtdb.firebaseio.com",
  projectId: "letmeask-5667d",
  storageBucket: "letmeask-5667d.appspot.com",
  messagingSenderId: "731800864790",
  appId: "1:731800864790:web:333dce68539ec7650b8d37"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();