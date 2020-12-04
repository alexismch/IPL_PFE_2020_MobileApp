import firebase from 'firebase'
let firebaseConfig = {
    apiKey: "AIzaSyCwCk7h5A3bK430ExwNDB4gaPvPq4L76ic",
    authDomain: "ipl-pfe-2020.firebaseapp.com",
    projectId: "ipl-pfe-2020",
    storageBucket: "ipl-pfe-2020.appspot.com",
    messagingSenderId: "296580355377",
    appId: "1:296580355377:web:3c85fbce6e75afccdf8c10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase