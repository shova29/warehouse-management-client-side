import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user?.user.email;
      if (email) {
        const { data } = await axios.post("http://localhost:5000/signin", {
          email,
        });
        setToken(data);
        localStorage.setItem("accessToken", data);
      }
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;
