import React, {useState} from 'react';
import styles from "./EditPost.module.css";
import CustomButton from "../../ui/button/CustomButton";
import {useDispatch} from "react-redux";
import {editPost} from "../../redux/action-creators";

const EditPost = ({ userId, postId, action }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch();

    async function editPostHandler( event ) {
        event.preventDefault();
        const postBody = {
            id: postId,
            title: title,
            body: body,
            userId: userId,
        };

        await dispatch(editPost(postBody));
        action();
    }


    return (
        <div className={styles.editPostBlock}>
            <form onSubmit={editPostHandler}>
                <label>title</label>
                <textarea rows={3} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>text</label>
                <textarea rows={8} value={body} onChange={(e) => setBody(e.target.value)}/>
                <CustomButton value={"Edit post"} type={"submit"}/>
            </form>
        </div>
    );
};

export default EditPost;