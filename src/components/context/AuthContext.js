import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { hosturl } from "../utils/Apis";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token"); // => 'value'
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const getUserDetails = async () => {
      await axios
        .get(`${hosturl}/api/user/getuser`, config)
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) =>  console.log(err.response.data));
    };
    getUserDetails();
  }, []);


  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
