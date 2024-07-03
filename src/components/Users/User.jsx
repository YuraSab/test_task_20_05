import React from 'react';
import {Link} from "react-router-dom";
import styles from "./User.module.css";

const User = ({user}) => {
    return (
        <div className={styles.item}>
            <h1>{user.name}</h1>
            <Link to={`/users/${user.id}/posts`} >Posts</Link>
        </div>
    );
};

export default User;