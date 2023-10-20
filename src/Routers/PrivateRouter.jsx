import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return (
            <div className="text-center my-96">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate state={location.pathname} to="/login"></Navigate>
        )
    }


};

PrivateRouter.propTypes = {
    children: PropTypes.node
}


export default PrivateRouter;