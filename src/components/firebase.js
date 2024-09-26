// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAopPhgZaV9sOGq3ieBy9YtVPhGvZJl4gw",
  authDomain: "mindzz-d0b99.firebaseapp.com",
  projectId: "mindzz-d0b99",
  storageBucket: "mindzz-d0b99.appspot.com",
  messagingSenderId: "47814329591",
  appId: "1:47814329591:web:f43e8512297c9888353ff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;