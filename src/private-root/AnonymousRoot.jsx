import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// const LoginPrivateRoute = ({ children }) => {
 
//     const token = useSelector((state) => state.access.value);
//     console.log(token);

//     const isan = true

 
//   return isan ? children : <Navigate to="/home" />;
// };

// export default LoginPrivateRoute;

const Anonymous = () => {

  const token = useSelector((state) => state.user.access);

  return token ? <Navigate to="/home" replace /> : <Outlet />;
}

export default Anonymous;