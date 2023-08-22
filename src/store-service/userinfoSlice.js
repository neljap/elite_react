import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'userinfo',
  initialState: {
    value: {
        registeredAt: null,
        email:null,
        fullname:null,
        phoneNumber:null,
        profilePicture: [],
        referralId: null,
        referredBy: null,
        time: null,
        totalDeposit: null,
        totalReferrals:null,
        totalWithdrawal:null,
        uid:null,
        verified:null,
        verifyDocs: []
    },
  },
//   reducers: {
//     // getData: (state, action)=>{
//     // },
//     // increment: (state) => {
//     //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
//     //   // doesn't actually mutate the state because it uses the Immer library,
//     //   // which detects changes to a "draft state" and produces a brand new
//     //   // immutable state based off those changes.
//     //   // Also, no return statement is required from these functions.
//     //   state.value += 1
//     // },
//     // decrement: (state) => {
//     //   state.value -= 1
//     // },
//     // incrementByAmount: (state, action) => {
//     //   state.value += action.payload
//     // },
//   },
})

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer