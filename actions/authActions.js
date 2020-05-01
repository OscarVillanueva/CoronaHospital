import { 
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "../types/index";
import axios from '../config/axios';

// Registrar un nuevo usuario
export function registerUserAction(user) {
    return async dispatch => {

        dispatch( registerUser() )

        try {
            const exists = await axios.get(`/users?email=${user.email}`)

            if(exists) dispatch ( registerUserError( { message: "El usuario ya existe" } ) )
            else {
                await axios.post("/users", user)
                dispatch( registerUserSuccess(user) )
            }


        } catch (error) {
            dispatch( registerUserError(error) )
        }

    }
} 

const registerUser = () => ({
    type: REGISTER,
})

const registerUserSuccess = user => ({
    type: REGISTER_SUCCESS,
    payload: user
})

const registerUserError = error => ({
    type: REGISTER_ERROR,
    payload: error
})