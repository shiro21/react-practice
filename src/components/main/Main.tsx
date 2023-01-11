import { Link, useNavigate } from "react-router-dom";

export const Main = () => {

    const navigation = useNavigate();

    const onClick = () => {
        localStorage.removeItem("login");
        navigation("/login");
    }
    return (
        <article>
            <Link to="/crud">CRUD로 이동</Link><br /><br /><br />
            <button onClick={onClick}>로그아웃</button>
        </article>
    );
}