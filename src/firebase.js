// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFJHGyeVLjaQfAe4jLsrtPIiLOfdSrCvg",
  authDomain: "uniwallet-ed56d.firebaseapp.com",
  projectId: "uniwallet-ed56d",
  storageBucket: "uniwallet-ed56d.firebasestorage.app",
  messagingSenderId: "736001462787",
  appId: "1:736001462787:web:0d55fc6833677538523436",
  measurementId: "G-52K3B1DW5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };