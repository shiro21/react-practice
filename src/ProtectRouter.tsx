import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {

    const auth = localStorage.getItem("login");
    let loggedIn: boolean;

    if (auth) loggedIn = true;
    else loggedIn = false;

    return loggedIn;
}

export const ProtectRouter = () => {
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}