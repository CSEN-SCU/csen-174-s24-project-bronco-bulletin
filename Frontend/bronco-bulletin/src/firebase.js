// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBolV6asLnQVAGbaEduMPl9lC1X13EAdb8",
    authDomain: "csen174-30eba.firebaseapp.com",
    projectId: "csen174-30eba",
    storageBucket: "csen174-30eba.appspot.com",
    messagingSenderId: "684426325110",
    appId: "1:684426325110:web:2ef190f4864a0bd0794357",
    measurementId: "G-S6CZLDG95K"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
