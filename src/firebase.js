import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnsUVyIGyjuT6iK8jHLeN2i99KMT7C9g0",
  authDomain: "diploma-1a68a.firebaseapp.com",
  projectId: "diploma-1a68a",
  storageBucket: "diploma-1a68a.appspot.com",
  messagingSenderId: "226897827203",
  appId: "1:226897827203:web:efc607b362387ca93012b6",
  measurementId: "G-7WVN7N50Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app,db}