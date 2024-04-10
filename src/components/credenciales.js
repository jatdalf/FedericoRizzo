// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVLalRudZcChDrMWIKc-7WyED1zjOxnMI",
  authDomain: "inmobiliariafederizzo.firebaseapp.com",
  projectId: "inmobiliariafederizzo",
  storageBucket: "inmobiliariafederizzo.appspot.com",
  messagingSenderId: "849614277039",
  appId: "1:849614277039:web:74c3c5ec6eba10de30875a",
  measurementId: "G-EY2497NYTN"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default appFirebase