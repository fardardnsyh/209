import { Navigate } from "react-router-dom";

const EmailConfirmPrivateRoute = ({ children }) => {
 
    const emailToSend = sessionStorage.getItem('emailToSend');
    console.log(emailToSend);

    const email = true
 
    return email ? children : <Navigate to="/login" />;
};

export default EmailConfirmPrivateRoute;