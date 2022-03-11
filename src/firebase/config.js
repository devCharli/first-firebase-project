import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtgr8gLF1r2XPIP2ySbICH_U0lBoi7fEA",
  authDomain: "mywallet-594e6.firebaseapp.com",
  projectId: "mywallet-594e6",
  storageBucket: "mywallet-594e6.appspot.com",
  messagingSenderId: "733740806501",
  appId: "1:733740806501:web:52e2aa995dbb0096e1718c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
