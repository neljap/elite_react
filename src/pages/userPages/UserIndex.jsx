import { Routes, Route } from "react-router-dom";
import UserInvest from "./UserInvest";
import UserSettings from "./UserSettings";
import UserSupport from "./UserSupport";
import UserOverPg from "./UserOverPg";
import Sidebar from "../../components/Layout/Sidebar";
import UserHome from "./UserHome";
import UserRefer from "./UserReferSect";
import UserTopNot from "../../components/UsersDashSection/UserTopNot";
import UserKycVerify from "./UserKycVerify";
import UserKycVData from "./UserKycVData";
import UserWallet from "./UserWallet";
import UserDepositSec from "./UserDepositSec";
import UserWithdrawPg from "./UserWithdrawPg";
import UserSwapPg from "./UserSwapPg";
import UserWithDrawF from "./UserWithDrawF";
import UserPayData from "./UserPayData";
import ProtectedRoutes from "../../components/Protect/ProtectedRoutes";
import UserPayProofPg from "./UserPayProofPg";
import UserWdwSuccess from "./UserWdwSuccess";

const UserIndex = () => {
  return (
    <>
  <ProtectedRoutes>
      <Sidebar>
      <UserTopNot />
        <Routes>
          <Route path="home" element={<UserHome />} />
          <Route path="investment" element={<UserInvest />} />
          <Route path="support" element={<UserSupport />} />
          <Route path="refferals" element={<UserRefer />} />
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
  </ProtectedRoutes> 
    </>
  );
};

export default UserIndex;
