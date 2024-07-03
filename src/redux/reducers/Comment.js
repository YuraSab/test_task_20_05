import {FETCH_COMMENTS_BY_POST_ID} from "../action-types";


const initialState = {
    chosenComments: [],
}

const commentReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_COMMENTS_BY_POST_ID: {
            return {
                ...state,
                chosenComments: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default commentReducer;