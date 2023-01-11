import React from "react";
import { TextProps } from "../ts/interface";

export const TextInput: React.FunctionComponent<TextProps> = ({ text, setText }) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;

        setText(value);
    }

    return (
        <>
            <input type="text" value={text} onChange={onChange} placeholder="제목을 입력해주세요." />
        </>
    );
};