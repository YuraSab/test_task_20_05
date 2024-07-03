import {commentService} from "../../services/CommentService";
import {FETCH_COMMENTS_BY_POST_ID} from "../action-types/Comment";


export const fetchCommentsByPostId = (postId) => {
    return async (dispatch) => {
        try {
            const comments = await commentService.getCommentsByPostId(postId);
            dispatch({ type: FETCH_COMMENTS_BY_POST_ID, payload: comments })
        } catch ( error ) {
            console.error("Failed to get comments: ", error);
        }
    }
};