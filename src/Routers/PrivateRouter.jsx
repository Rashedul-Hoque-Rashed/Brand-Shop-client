import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

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

export default PrivateRouter;