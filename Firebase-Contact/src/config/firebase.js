// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkQRy8KIoWPWohR-62or0EBdCneJKkyMw",
  authDomain: "vite-contact-65f09.firebaseapp.com",
  projectId: "vite-contact-65f09",
  storageBucket: "vite-contact-65f09.appspot.com",
  messagingSenderId: "835840301383",
  appId: "1:835840301383:web:030b77b8431355e26d9462"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);