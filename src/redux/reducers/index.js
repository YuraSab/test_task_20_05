import {combineReducers} from "redux";
import userReducer from "./User";
import postReducer from "./Post";
 import commentReducer from "./Comment";
export const reducers = combineReducers({
    users: userReducer,
    posts: postReducer,
    chosenPost: postReducer,
    chosenComments: commentReducer,
    chosenUser: userReducer,
})