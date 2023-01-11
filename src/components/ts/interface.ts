import { Dispatch, SetStateAction } from "react";

export interface TextProps {
    text: string,
    setText: Dispatch<SetStateAction<string>>
}

export interface ButtonProps {
    btn: boolean,
    name: string,
    setBtn: Dispatch<SetStateAction<boolean>>
}

export interface ArrayProps {
    id: number,
    title: string,
    contents: string,
}