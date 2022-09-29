import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const auth =useSelector((state)=>state.AuthReducer.isAuth);
    // console.log(auth);

    const location=useLocation();
    // console.log(location);
  
    if(!auth){
        // send him to SignIn page
        return <Navigate to="/signin" replace 
        // state={{data:"Testing Data from RequireAuth to SignIn Page"}}
        state={{data:location.pathname}}
        />

    }

    return children;
};

export default ReqAuth;