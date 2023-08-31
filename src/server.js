import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
//   sendPasswordResetEmail,
//   updatePassword,
  signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNzmyPGWAGhC_1ugk-yGGExJg7EnoN-bE",
  authDomain: "elite-25ede.firebaseapp.com",
  projectId: "elite-25ede",
  storageBucket: "elite-25ede.appspot.com",
  messagingSenderId: "118731321843",
  appId: "1:118731321843:web:bdacd58eb9fb0f43622286",
  measurementId: "G-FWKTWKHZ1Q" 
};

// InitializeApp
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// Google Sign In
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOutHandler = () => signOut(auth);

export const onAuthStateChangedHandler = (callback) =>
  onAuthStateChanged(auth, callback);
