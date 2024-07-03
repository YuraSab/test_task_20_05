import {postService} from "../../services/PostService";
import {ADD_POST, DELETE_POST, EDIT_POST, FETCH_POST_BY_ID, FETCH_POSTS_BY_USER_ID} from "../action-types/Post";


export const fetchPostsByUserId = (userId) => {
    return async (dispatch) => {
        try {
            const posts = await postService.getPostsByUserId(userId);
            dispatch({ type: FETCH_POSTS_BY_USER_ID, payload: posts })
        } catch ( error ) {
            console.error("Failed to get posts data: ", error);
        }
    }
};

export const fetchPostById = (postId) => {
    return async (dispatch) => {
        try {
            const post = await postService.getPost(postId);
            dispatch({ type: FETCH_POST_BY_ID, payload: post })
        } catch ( error ) {
            console.error("Failed to get post data: ", error);
        }
    }
};

export const addPost = (post) => {
    return async (dispatch) => {
        try {
            const result = await postService.addNewPost(post);
            console.log("Added post: ", result);
            dispatch({ type: ADD_POST, payload: result });
        } catch ( error ) {
            console.error( "Error adding post:", error );
        }
    }
};

export const editPost = (post) => {
    return async (dispatch) => {
        try {
            const result = await postService.editPost(post);
            console.log("Edited post: ", result);
            dispatch({ type: EDIT_POST, payload: result });

        } catch ( error ) {
            console.error( "Error editing post:", error );
        }
    }
}

export const deletePost = (postId) => {
    return async (dispatch) => {
        try {
            await postService.deletePost(postId);
            dispatch({ type: DELETE_POST, payload: postId });
        } catch ( error ) {
            console.error( "Error deleting post:", error );
        }
    }
}

