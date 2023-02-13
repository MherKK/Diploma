// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnsUVyIGyjuT6iK8jHLeN2i99KMT7C9g0",
  authDomain: "diploma-1a68a.firebaseapp.com",
  projectId: "diploma-1a68a",
  storageBucket: "diploma-1a68a.appspot.com",
  messagingSenderId: "226897827203",
  appId: "1:226897827203:web:efc607b362387ca93012b6",
  measurementId: "G-7WVN7N50Q9"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const dataRef = firebase.database();
export default firebase;



