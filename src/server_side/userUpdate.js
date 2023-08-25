import { app } from "./firebaseConfig";
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { sample } from "../store-service/store";

const auth = getAuth(app);
const user = auth.currentUser;
const db = getFirestore(app);
export const storage = getStorage(app);

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

async function uploadFile(file, folderOnFirebase="profile_pics" ){
  let res = {};
  try{
    let storePath = `profile_pics/${(Math.random() * new Date().getDate()).toString()}${file.name}`;
    const storageRef = ref(storage, storePath);
    uploadBytes(storageRef, file).
    then((snapshot)=>{ console.log("uploaded file")})
    .catch((err)=>{console.log(`unable to upload file ${err}`)});
    res = {
      results: true,
      path: storePath
    };
  }
  catch(er){
    console.log(`couldn't upload file ${er}`);
    res = er;
  }
  return res;
}


async function setData(){}

export {uploadFile}