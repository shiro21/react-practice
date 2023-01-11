import { useNavigate } from "react-router-dom";

export const Main = () => {

    const navigation = useNavigate();

    const onClick = () => {
        localStorage.removeItem("login");
        navigation("/login");
    }
    return (
        <article>
            <button onClick={onClick}>로그아웃</button>
        </article>
    );
}