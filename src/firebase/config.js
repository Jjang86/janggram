// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLly8ZTdlGaI4jvW1oDburCSKn959bp5U",
  authDomain: "ninja-firegram-b185e.firebaseapp.com",
  projectId: "ninja-firegram-b185e",
  storageBucket: "ninja-firegram-b185e.appspot.com",
  messagingSenderId: "763551963125",
  appId: "1:763551963125:web:0f5416ca002846cba372bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };