import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigation = useNavigate();
    const [login, setLogin] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;

        setLogin(value);
    }

    const onClick = () => {
        localStorage.setItem("login", login);
        navigation("/");
    }

    return (
        <article>
            <input type="text" value={login} onChange={onChange} />
            <button onClick={onClick}>로그인 성공</button>
        </article>
    );
}