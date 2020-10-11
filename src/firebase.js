import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5sODIHuVdY4nCJG-CzwWTFCJJiUDob5s",
    authDomain: "clone-5f02f.firebaseapp.com",
    databaseURL: "https://clone-5f02f.firebaseio.com",
    projectId: "clone-5f02f",
    storageBucket: "clone-5f02f.appspot.com",
    messagingSenderId: "319619412543",
    appId: "1:319619412543:web:474dcd2c6915ddf932be8a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); // Realtime DM in firebase
  const auth = firebase.auth(); // Authentication

  export { db, auth };