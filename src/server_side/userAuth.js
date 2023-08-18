import { app } from "./firebaseConfig";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const db = getFirestore(app);
const auth = getAuth(app);

function addData(data, collectionId, persistCustomId) {
    let customId = persistCustomId != '' ? '' : `/${persistCustomId}`;

    const promise = new Promise((resolve, reject) => {
        try {
            addDoc(collection(db, collectionId), data)
                .then((results) => {

                    resolve(`added data`);
                })
                .catch((err) => {
                    resolve(`unable to add data`);
                });
        }
        catch (err) {
            resolve(`err ${err}`)
        }
    });

    return promise;
}


export function createUser(userdetails ) {
    const pass = userdetails.pass != undefined ? userdetails.pass : '';
    const auth = getAuth();

    // const example={
    //     number:,
    //     fullname:,
    //     email:,
    //     referred_by:,
    // }

    const promise = new Promise((resolve, reject) => {
        try {
            createUserWithEmailAndPassword(auth, userdetails.email, pass)
                .then((result) => {
                    resolve(`registered user successfully`)
                    let _uid = result.user.uid;
                    //details
                    const userDetails = {
                        referal_id: Math.random() * new Date().getDate(),
                        ["phone number"]: userdetails.number,
                        fullname: userdetails.fullname,
                        ["profile picture"]: userdetails.profile != undefined? userdetails.profile : "",
                        uid: _uid,
                        ["total deposit"]: userdetails.totalDeposit != undefined ? userdetails.totalDeposit : "",
                        ["total referrals"]: userdetails.totalReferrals != undefined ? userdetails.totalReferrals: "",
                        ["total withdrawal"] : userdetails.totalWithdrawal != undefined ? userdetails.totalWithdrawal: "",
                        verified: userdetails.verified != undefined ? userdetails.verified : "",
                        ["verify docs"]: "",
                        email: userdetails.email,
                        ["referred by"]: userdetails.referred_by != undefined ? userdetails.referred_by: "",
                        ['Registered at']: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                        time: `${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`
                    };
                    addData(userDetails, 'Users', `${userDetails['Registered at']}-${userDetails.time}`)
                        .then((reason) => {
                            //success
                            resolve(`added data`);
                        })
                        .catch((err) => {
                            reject(`unable to add data due to this reason`);
                        })
                })
                .catch((err) => {
                    //error
                    reject(`unable to create user with email and password`);
                })
        }
        catch (error) {
            reject(`error ${error}`)
        }
    })
    return promise;
}






export function signInWithEmailAndPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in error:", errorCode, errorMessage);
    });
}



  