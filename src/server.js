import {initializeApp} from 'firebase/app'
import {getAuth,
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signInWithPopup,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updatePassword,
    signOut
} from 'firebase/auth'

import {
    getFirestore,
    getDoc,
    doc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDNzmyPGWAGhC_1ugk-yGGExJg7EnoN-bE",
    authDomain: "elite-25ede.firebaseapp.com",
    projectId: "elite-25ede",
    storageBucket: "elite-25ede.appspot.com",
    messagingSenderId: "118731321843",
    appId: "1:118731321843:web:a0c9e05090ae0c96622286",
    measurementId: "G-5LV93SYB55"
}

// InitializeApp
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()



provider.setCustomParameters({
    prompt: 'select_account'
})


// Google Sign In
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const db = getFirestore()