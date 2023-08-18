import { app } from "./firebaseConfig";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const db = getFirestore(app);

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


function createUser(userdetails ) {
    const pass = userdetails.pass != undefined ? userdetails.pass : '';
    const auth = getAuth();

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
                        ["profile picture"]: userdetails.profile,
                        uid: _uid,
                        ["total deposit"]: userdetails.totalDeposit,
                        ["total referrals"]: userdetails.totalReferrals,
                        ["total withdrawal"] : userdetails.totalWithdrawal,
                        verified: userdetails.verified,
                        ["verify docs"]: "",
                        email: userdetails.email,
                        ["referred by"]: "",
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