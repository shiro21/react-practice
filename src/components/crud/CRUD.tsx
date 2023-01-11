import { useCallback, useEffect, useState } from "react";
import styles from "../../styles/CRUD.module.scss";
import { CreateButton } from "../item/CreateButton";
import { Textarea } from "../item/Textarea";
import { TextInput } from "../item/TextInput";
import { UpdateButton } from "../item/UpdateButton";
import { ArrayProps } from "../ts/interface";

export const CRUD = () => {
    const [title, setTitle] = useState<string>("");
    const [contents, setContents] = useState<string>("");
    // false: createBtn | true: updateBtn
    const [btnChange, setBtnChange] = useState<boolean>(false);
    const [createBtn, setCreateBtn] = useState<boolean>(false);
    const [updateBtn, setUpdateBtn] = useState<boolean>(false);
    const [array, setArray] = useState<ArrayProps[]>([]);
    const [changeCount, setChangeCount] = useState<number>(0);
    // 계속 증가하는 id Number
    const [count, setCount] = useState<number>(0);
    
    // 글 생성
    const list = useCallback(() => {
        setArray(prev => [...prev, {id: count, title: title, contents: contents}]);
        setCount(prev => prev + 1);
        setTitle("");
        setContents("");
        setCreateBtn(false);
    }, [title, contents, count]);
    useEffect(() => {
        if (createBtn) list();
    }, [createBtn, list]);

    // 글 업데이트
    useEffect(() => {
        if (updateBtn) {
            let update = [...array];

            update[changeCount].title = title;
            update[changeCount].contents = contents;

            setArray(update);
            setTitle("");
            setContents("");
            setBtnChange(false);
            setUpdateBtn(false);
        }
    }, [updateBtn, array, title, contents, changeCount])

    // 삭제 | 업데이트
    const onUpdate = (list: string, item: ArrayProps) => {

        if (list === "delete") setArray(array.filter(arr => arr.id !== item.id));
        else if (list === "update") {
            setChangeCount(item.id);
            setTitle(item.title);
            setContents(item.contents);
            setBtnChange(true);
        }
    }

    return (
        <article className={styles.crud_wrap}>
            <div className={styles.text_wrap}>
                <TextInput text={title} setText={setTitle} />
            </div>
            <div className={styles.contents_wrap}>
                <Textarea text={contents} setText={setContents} />
            </div>
            <div className={styles.button_wrap}>
                {
                    btnChange ? <UpdateButton name="업데이트" btn={updateBtn} setBtn={setUpdateBtn} /> : <CreateButton name="확인" btn={createBtn} setBtn={setCreateBtn} />
                }
            </div>
            <ul>
                {
                    array.length > 0 && array.map(item => (
                        <li key={item.id}>
                            <h2>{item.title}
                                <div className={styles.arr_wrap}>
                                    <span onClick={() => onUpdate("update", item)}>업데이트 | </span>
                                    <span onClick={() => onUpdate("delete", item)}>삭제</span>
                                </div>
                            </h2>
                            <p>{item.contents}</p>
                        </li>
                    ))
                }
            </ul>
        </article>
    );
}