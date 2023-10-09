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
  apiKey: "AIzaSyDKg_8zSf51b1pewDD72W2NE7XH-9qfpGk",
  authDomain: "spectrumcapitals.firebaseapp.com",
  projectId: "spectrumcapitals",
  storageBucket: "spectrumcapitals.appspot.com",
  messagingSenderId: "545778854689",
  appId: "1:545778854689:web:57538843082a1ee1a92c60"
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// InitializeApp
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)

const provider = new GoogleAuthProvider();

export const gProvider = provider.setCustomParameters({prompt: "select_account"})
// export const googleSignInWithPopup = async () => await signInWithPopup(provider)


// Google Sign In
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOutHandler = () => signOut(auth);

export const onAuthStateChangedHandler = (callback) =>
  onAuthStateChanged(auth, callback);
