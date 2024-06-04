// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAunqk1uxwo_qc75oXxAbFbrtF8Oo1R_Ac",
  authDomain: "pcweb6-41e52.firebaseapp.com",
  projectId: "pcweb6-41e52",
  storageBucket: "pcweb6-41e52.appspot.com",
  messagingSenderId: "553432122897",
  appId: "1:553432122897:web:19f2e8c97ee289301513b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
