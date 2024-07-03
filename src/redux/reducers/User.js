import {FETCH_USERS, SET_CHOSEN_USER} from "../action-types";


const initialState = {
    users: [],
    chosenUser: {},
};

const userReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_USERS: {
            return {
                ...state,
                users: action.payload
            };
        }
        case SET_CHOSEN_USER: {
            const foundUser = state.users.find(el => el.id === action.payload);
            return {
                ...state,
                chosenUser: foundUser,
            };
        }

        default: {
            return state;
        }
    }
}

export default userReducer;