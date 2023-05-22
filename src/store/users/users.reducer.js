import { toFormData } from "axios";
import { DELETE_USERS, UPDATE_USERS, GET_USERS } from "./users.action";


const initialState = {
    usersList: [],
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS:
        return {
            ...state,
            usersList:action.payload,
        }

        case UPDATE_USERS:
            return{
                ...state,
                usersList: action.payload
            }

        case DELETE_USERS:
            return{
                ...state,
                usersList:[]
            }

        default:
            return state;
    }
}
