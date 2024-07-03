import {FETCH_USERS, SET_CHOSEN_USER} from "../action-types";
import {userService} from "../../services/UserService";


export const fetchUsers = () => {
   return async (dispatch) => {
      try {
         const users = await userService.getUsers();
         dispatch({ type: FETCH_USERS, payload: users });
      } catch ( error ) {
         console.error("Failed to fetch users: ", error);
      }
   }
};

export const setChoseUser = (userId) => ({
   type: SET_CHOSEN_USER,
   payload: userId
});