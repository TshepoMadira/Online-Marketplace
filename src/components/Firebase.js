
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyArkNc61ekEhdvAWBYfV-oE1BYJHJEBeyI",
  authDomain: "online-marketplace-2b6af.firebaseapp.com",
  projectId: "online-marketplace-2b6af",
  storageBucket: "online-marketplace-2b6af.firebasestorage.app",
  messagingSenderId: "603333966657",
  appId: "1:603333966657:web:3ad03169ce26e1f4557fc0",
  measurementId: "G-C4NWDEW560"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };