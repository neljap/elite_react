import { Routes, Route } from "react-router-dom";
import UserInvest from "./UserInvest";
import UserSettings from "./UserSettings";
import UserSupport from "./UserSupport";
import UserOverPg from "./UserOverPg";
import Sidebar from "../../components/Layout/Sidebar";
import UserHome from "./UserHome";
import UserRefer from "./UserReferSect";

const UserIndex = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="home" element={<UserHome />} />
        <Route path="invest" element={<UserInvest />} />
        <Route path="support" element={<UserSupport />} />
        <Route path="refferals" element={<UserRefer />} />
        <Route path="overview" element={<UserOverPg />} />
        <Route path="settings" element={<UserSettings />} />
      </Routes>
    </Sidebar>
  );
};

export default UserIndex;
