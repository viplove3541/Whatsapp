// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCF2NfJG6-LBq0QDDuxIgh_wGrTcLszcgg",
    authDomain: "whatsapp-19b87.firebaseapp.com",
    projectId: "whatsapp-19b87",
    storageBucket: "whatsapp-19b87.appspot.com",
    messagingSenderId: "846561890877",
    appId: "1:846561890877:web:c3fadf2f17a51a90c4d054",
    measurementId: "G-Y0MR9G8JX4"
  };

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

