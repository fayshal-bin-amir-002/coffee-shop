// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9dYAsPQHf6Zln3hebmYTRXBsJ0nf1UtU",
  authDomain: "coffee-store-bb2cf.firebaseapp.com",
  projectId: "coffee-store-bb2cf",
  storageBucket: "coffee-store-bb2cf.appspot.com",
  messagingSenderId: "951787121956",
  appId: "1:951787121956:web:2806a06930046471f8d7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;