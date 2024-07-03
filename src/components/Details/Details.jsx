import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, fetchPostById} from "../../redux/action-creators";
import {fetchCommentsByPostId} from "../../redux/action-creators";
import {setChoseUser} from "../../redux/action-creators";
import Comment from "../Comment/Comment";
import CustomButton from "../../ui/button/CustomButton";
import EditPost from "../EditPost/EditPost";
import Popup from "../../ui/Popup/Popup";
import styles from "./Details.module.css";

const Details = () => {

    const [isEditing, setIsEditing] = useState(false);

    const { postId, userId } = useParams();
    let navigate = useNavigate();
    const chosenPost = useSelector( state => state.chosenPost.chosenPost );
    const chosenUser = useSelector( state => state.chosenUser.chosenUser );
    const chosenComments = useSelector( state => state.chosenComments.chosenComments );
    const dispatch = useDispatch();

    async function deletePostHandler() {
        await dispatch(deletePost(Number(postId)));
        navigate(`/users/${userId}/posts`);
    }

    useEffect(() => {
        dispatch(fetchPostById(postId));
        dispatch(fetchCommentsByPostId(postId));
        dispatch(setChoseUser(Number(userId)));
    // }, []);
    }, [dispatch, postId, userId]);


    return (
        <div className={styles.detailsBlock}>
            <h1>Post:</h1>
            {
                chosenUser &&
                <Comment title={chosenPost.title} body={chosenPost.body} author={chosenUser.name}/>
            }
            <CustomButton value={"Edit"} action={() => setIsEditing(true)} customStyles={{marginRight: 50}}/>
            <CustomButton value={"Delete"} action={() => deletePostHandler()}/>
            <h1>Comments:</h1>
            {
                chosenComments &&
                chosenComments.map(el => <Comment key={el.id} title={el.name} body={el.body} author={el.email}/>)
            }
            {
                isEditing &&
                <Popup action={() => setIsEditing(false)}>
                    <EditPost postId={Number(postId)} userId={Number(userId)} action={() => setIsEditing(false)}/>
                </Popup>
            }
        </div>
    );
};

export default Details;