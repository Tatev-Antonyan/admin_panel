import axios from "axios";
export const UPDATE_USERS = 'UPDATE_USERS';
export const DELETE_USERS = 'DELETE_USERS';
export const GET_USERS = 'GET_USERS';
export const USERS_ERROR = 'USERS_ERROR';


export const updateUsers = (data) => {
    return{
         type:UPDATE_USERS,
         payload: data
    }
}

export const deleteUsers = () => {
    return{
        type:DELETE_USERS
    }
}

export const getUsers = () => {
    
    try{
        const res = axios.get('https://gorest.co.in/public/v2/users')
        return {
            type: GET_USERS,
            payload: res.data
        }
    }
    catch(e){
        return {
            type: USERS_ERROR,
            payload: console.log(e),
        }
    }

}

