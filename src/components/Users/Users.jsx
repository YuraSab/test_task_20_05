import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/action-creators";
import styles from "./Users.module.css"
import User from "./User";

const Users = () => {

    const users = useSelector( state => state.users.users );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <div className={styles.list}>
            {
                users.length &&
                users.map(el => <User key={el.id} user={el} />)
            }
        </div>
    );
};

export default Users;