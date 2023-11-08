import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "https://food-donation-server-ass11.vercel.app",
    withCredentials: true
});

const useAxiosSecure = () => {
    const { loginOut } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
      axiosSecure.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          if (error.response.status == 401 || error.response.status == 403) {
            loginOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => console.log(error));
          }
        }
      );
    }, [loginOut, navigate]);
    
    return axiosSecure;
};

export default useAxiosSecure;