import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5JdsYAO3yKLDrt8Yv2nxJNCYkFJOfxRg",
    authDomain: "clone-bbd41.firebaseapp.com",
    projectId: "clone-bbd41",
    storageBucket: "clone-bbd41.appspot.com",
    messagingSenderId: "1074468648254",
    appId: "1:1074468648254:web:5d67440d7558231319286f"
  };
  
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };


