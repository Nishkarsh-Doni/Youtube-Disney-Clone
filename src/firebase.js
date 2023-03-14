// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuSNrkFYlPK2iYjk2K1INAOMWsn5vzt50",
  authDomain: "disneyplus-clone-4e945.firebaseapp.com",
  projectId: "disneyplus-clone-4e945",
  storageBucket: "disneyplus-clone-4e945.appspot.com",
  messagingSenderId: "318680076757",
  appId: "1:318680076757:web:c77327c8b5084f5d432d5c",
  measurementId: "G-FT790KLD4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, provider, storage, analytics, signInWithPopup, signOut };
export default db;
