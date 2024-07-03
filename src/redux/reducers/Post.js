import {ADD_POST, DELETE_POST, EDIT_POST, FETCH_POST_BY_ID, FETCH_POSTS_BY_USER_ID} from "../action-types";


const initialState = {
    posts: [],
    chosenPost: {},
}

const postReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_POSTS_BY_USER_ID: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        }
        case FETCH_POST_BY_ID: {
            return {
                ...state,
                chosenPost: action.payload,
            }
        }
        case EDIT_POST: {
            const deleted = state.posts.filter(el => el.id !== action.payload.id);
            const added = [...deleted, action.payload];
            console.log("Edited massive: ", added);
            return {
                ...state,
                posts: added
            }
        }
        case DELETE_POST: {
            const deleted = state.posts.filter(el => el.id !== action.payload);
            console.log("Massive without deleted element: ", deleted);
            return {
                ...state,
                posts: deleted
            }
        }

        default: {
            return state;
        }
    }
}

export default postReducer;