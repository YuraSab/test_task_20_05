import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/action-creators";
import styles from "./AddPost.module.css";
import CustomButton from "../../ui/button/CustomButton";

const AddPost = ({userId, action}) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch();

    async function handleAddPost(e) {
        e.preventDefault();
        const newPost = {
            title,
            body,
            userId,
        }

        dispatch(addPost(newPost));
        action();
    }


    return (
        <div className={styles.addPostBlock}>
            <form onSubmit={handleAddPost}>
                <label>title</label>
                <textarea rows={3} value={title} onChange={( e) => setTitle( e.target.value )}/>
                <label>text</label>
                <textarea rows={8} value={body} onChange={( e) => setBody( e.target.value )}/>
                <CustomButton value={"Add post"} type={"submit"}/>
            </form>
        </div>
    );
};

export default AddPost;