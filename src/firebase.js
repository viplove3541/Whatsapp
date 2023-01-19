// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB0QD_FXjazRLvdnWZ1lqhyTjoQS8cPRIw",
  authDomain: "whatsapp-clone-ea3d4.firebaseapp.com",
  projectId: "whatsapp-clone-ea3d4",
  storageBucket: "whatsapp-clone-ea3d4.appspot.com",
  messagingSenderId: "106142619138",
  appId: "1:106142619138:web:d252de155bf132847a391b",
  measurementId: "G-0WCM75WS48"
};
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

