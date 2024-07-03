import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Popup from "../../ui/Popup/Popup";
import AddPost from "../AddPost/AddPost";
import {fetchPostsByUserId} from "../../redux/action-creators";
import {setChoseUser} from "../../redux/action-creators";
import Post from "./Post";
import CustomButton from "../../ui/button/CustomButton";

const Posts = () => {

    const [onAddPost, setOnAddPost] = useState(false);

    const { userId } = useParams();
    const posts = useSelector( state => state.posts.posts );
    const chosenUser = useSelector( state => state.chosenUser.chosenUser );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsByUserId(userId));
        dispatch(setChoseUser(Number(userId)))
    }, [dispatch, userId]);


    return (
        <div>
            {
                chosenUser &&
                <h1>Posts of the {chosenUser.name}:</h1>
            }
            {
                posts.length &&
                posts.map(el => <Post key={el.id} post={el} userId={userId}/>)
            }
            {
                onAddPost &&
                <Popup action={() => setOnAddPost(false)}>
                    <AddPost userId={userId} action={() => setOnAddPost(false)}/>
                </Popup>
            }
            <CustomButton
                action={() => setOnAddPost(true)}
                value={"Add new post"}
                customStyles={{marginTop: 40}}
            />
        </div>
    );
};

export default Posts;