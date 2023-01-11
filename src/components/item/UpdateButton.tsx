import React from "react";
import { ButtonProps } from "../ts/interface";

export const UpdateButton: React.FunctionComponent<ButtonProps> = ({ name, btn, setBtn}) => {

    const onClick = () => {
        setBtn(true);
    }

    return (
        <>
            <button onClick={onClick}>{name}</button>
        </>
    )
};