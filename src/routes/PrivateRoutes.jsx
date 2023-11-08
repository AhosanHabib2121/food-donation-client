import {useContext} from "react";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../authProvider/AuthProvider";
import loader from '../assets/Animation -loading.gif'

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <>
      <div className=" grid justify-center">
        <img src={loader} alt="not found" />
        </div>
    </>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"> Login</Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
