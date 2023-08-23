import { app } from "./firebaseConfig";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const user = auth.currentUser;
const db = getFirestore(app);


function getUid(){
    if (user) {
        const uid = user.uid;
        console.log("UID of logged-in user:", uid);
        return uid;
      } else {
        console.log("No user is currently logged in.");
        return false;
      }
}
