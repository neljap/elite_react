import { Routes, Route } from "react-router-dom";
import UserInvest from "./UserInvest";
import UserSettings from "./UserSettings";
import UserSupport from "./UserSupport";
import UserOverPg from "./UserOverPg";
import Sidebar from "../../components/Layout/Sidebar";

const UserIndex = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="invest" element={<UserInvest />} />
        <Route path="support" element={<UserSupport />} />
        <Route path="overview" element={<UserOverPg />} />
        <Route path="settings" element={<UserSettings />} />
      </Routes>
    </Sidebar>
  );
};

export default UserIndex;
