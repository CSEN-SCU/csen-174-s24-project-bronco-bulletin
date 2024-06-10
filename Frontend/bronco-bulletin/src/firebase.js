// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8A7TbMK_9SDMPu0sXQ38_I0mytPnbhWY",
  authDomain: "csen174-1bbb4.firebaseapp.com",
  projectId: "csen174-1bbb4",
  storageBucket: "csen174-1bbb4.appspot.com",
  messagingSenderId: "536557988746",
  appId: "1:536557988746:web:39c0fde3fe47451f09f673",
  measurementId: "G-F2R8D8W7BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
