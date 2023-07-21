// Import the functions you need from the SDKs you need
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPcHmUdmX8HKiJURJxlRI0Ic8nXzTMgZI",
  authDomain: "mlh-hack-5ffd1.firebaseapp.com",
  projectId: "mlh-hack-5ffd1",
  storageBucket: "mlh-hack-5ffd1.appspot.com",
  messagingSenderId: "260912001763",
  appId: "1:260912001763:web:41f1d4eca3ba4d1739cbd6",
  measurementId: "G-C4BW4KVGKY"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue;