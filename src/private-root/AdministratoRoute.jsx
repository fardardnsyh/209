import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const AdministratorPrivateRoot = () => {

    const token = useSelector((state) => state.user.access);

    const decoded = jwtDecode(token);

    const { user_type, attachement, id_number, email, last_name, first_name} = decoded

    return user_type !== "administrator" ? <Navigate to="/company-list" replace /> : <Outlet />;
}

export default AdministratorPrivateRoot;