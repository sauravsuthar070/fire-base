import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB3cV3uInOO2XmPmR1515iYPtw5iAmsdw",
  authDomain: "fir-9f7a9.firebaseapp.com",
  projectId: "fir-9f7a9",
  storageBucket: "fir-9f7a9.appspot.com",
  messagingSenderId: "722586806068",
  appId: "1:722586806068:web:9e6d7162d63db80d34e761",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);