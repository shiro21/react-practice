import React from "react";
import { TextProps } from "../ts/interface";

export const Textarea: React.FunctionComponent<TextProps> = ({ text, setText }) => {

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { target: { value } } = e;

        setText(value);
    }

    return (
        <>
            <textarea value={text} onChange={onChange} placeholder="내용을 입력해주세요." />
        </>
    );
};