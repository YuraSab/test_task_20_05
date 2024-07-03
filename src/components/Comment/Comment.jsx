import React from 'react';
import styles from "./Comments.module.css";

const Comment = ({ title, body, author }) => {
    return (
        <div className={styles.chosenPostBlock}>
            <h1>{title}</h1>
            <h2>{body}</h2>
            <h4 className={styles.author}>{author}</h4>
        </div>
    );
};

export default Comment;