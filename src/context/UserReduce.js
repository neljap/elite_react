// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../server";
// import { toast } from "react-toastify";
// import { doc, getDoc } from "firebase/firestore";

// export const loginUser = createAsyncThunk('users/loginUser', async(credential) => {
//     const request = await signInWithEmailAndPassword(auth, credential.email, credential.password)
//     const userUid = request.user.uid
//     const userEmail = request.user.email
//     const userDocRef = doc(db, 'users', userUid)
//     const userDocSnap = await getDoc(userDocRef)

//     if(userDocSnap.exists()){
//         const response = userDocSnap.data()
//         // localStorage.setItem('user', JSON.stringify(response))
//         toast.success('Login SuccessFully', {
//             position: 'bottom-left'
//         })
//     }else{
//         console.log('No Documents Found in the Database')
//     }

//     // const response = request.user.uid
// }) 

// const initialState= {
//     user: null,
//     loading: false,
//     error: null
// }

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         logout: (state) => {
//             // localStorage.removeItem('user')
//             state.loading = false
//             state.user = null
//             state.error = null
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(loginUser.pending, (state) => {
//             state.loading = true
//             state.user = null
//             state.error = null
//         }).addCase(loginUser.fulfilled, (state, action) => {
//             state.loading = false
//             state.user = action.payload
//             state.error = null
//         }).addCase(loginUser.rejected, (state, action) => {
//             state.loading = false
//             state.user = null
//             if(action.error.code === 'auth/wrong-password'){
//                 toast.error('Incorrect Password')
//             }else{
//                 console.log(action.error.message)
//             }
//         })
//     }
// })

// export const {logout} = userSlice.actions
// export default userSlice.reducer;