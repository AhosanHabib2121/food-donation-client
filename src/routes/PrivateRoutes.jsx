import {useContext} from "react";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import {Circles} from "react-loader-spinner";
import { AuthContext } from "../authProvider/AuthProvider";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <div className=" grid justify-center mt-20">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
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
