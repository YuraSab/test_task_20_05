import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Post.module.css";

const Post = ({ post, userId }) => {
    return (
        <div className={styles.item}>
            <h2>{post.title}</h2>
            <Link to={`/users/${userId}/posts/${post.id}/details`}>Details</Link>
        </div>
    );
};

export default Post;