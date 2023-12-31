import { Routes, Route } from "react-router-dom";
import {
  UserInvest,
  UserSettings,
  UserSupport,
  UserOverPg,
  UserHome,
  UserReferSect,
  UserKycVerify,
UserKycVData,
UserWallet,
UserDepositSec,
UserWithdrawPg,
UserSwapPg,
UserWithDrawF,
UserPayData,
UserPayProofPg,
UserWdwSuccess
} from "../userPages";
import Sidebar from "../../components/Layout/Sidebar";
import UserTopNot from "../../components/UsersDashSection/UserTopNot";
// import ProtectedRoutes from "../../components/Protect/ProtectedRoutes";


const UserIndex = () => {
  return (
    <>
      {/* <ProtectedRoutes> */}
        <Sidebar>
          <UserTopNot />
          <Routes>
            <Route path="home" element={<UserHome />} />
            <Route path="investment" element={<UserInvest />} />
            <Route path="support" element={<UserSupport />} />
            <Route path="refferals" element={<UserReferSect />} />
            <Route path="overview" element={<UserOverPg />} />
            <Route path="my-wallet" element={<UserWallet />} />
            <Route path="deposit" element={<UserDepositSec />} />
            <Route path="payment/proof" element={<UserPayProofPg />} />
            <Route path="payment/:wallet/:amount" element={<UserPayData />} />
            <Route path="withdraw" element={<UserWithdrawPg />} />
            <Route path="withdraw-funds" element={<UserWithDrawF />} />
            <Route path="withdraw-success" element={<UserWdwSuccess />} />
            <Route path="coin-swap" element={<UserSwapPg />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="kyc-verify" element={<UserKycVerify />} />
            <Route path="kyc-data" element={<UserKycVData />} />
          </Routes>
          {/* <UserFooterCy /> */}
        </Sidebar>
      {/* </ProtectedRoutes> */}
    </>
  );
};

export default UserIndex;
