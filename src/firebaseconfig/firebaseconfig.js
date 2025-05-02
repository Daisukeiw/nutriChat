import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfMFAAwe1o3QQ1CQNtDOzDhBLX4CWt3Bc",
  authDomain: "login-nutrichat.firebaseapp.com",
  projectId: "login-nutrichat",
  storageBucket: "login-nutrichat.appspot.com",
  messagingSenderId: "140972530038",
  appId: "1:140972530038:web:b9b22ac2cb392d15d40257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore
const storage = getStorage(app); // Storage

export { app, auth, db, storage };