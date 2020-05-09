import { 
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR,
    LOG_OUT
} from "../types/index";
import axios from '../config/axios';

// Registrar un nuevo usuario
export function registerUserAction(user) {

    return async dispatch => {

        dispatch( registerUser() )

        try {
            const  { data } = await axios.get(`/users?email=${user.email}`)
            
            if(data.length > 0) dispatch ( registerUserError( { message: "El usuario ya existe" } ) )

            else {

                // city, state, country, parsearmos la localización
                const { city, state, country } = user
                const url = `https://api.opencagedata.com/geocode/v1/json?q=${city},${state},${country}&key=${process.env.GEO_KEY}`
                const location = await axios.get(url)

                user.geometry = location.data.results[0].geometry

                const { data } = await axios.post("/users", user)

                if(user.type === "doctor") 
                    await axios.post("/specialities", { title: user.speciality })

                dispatch( registerUserSuccess(data) )
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

// Entrar o login 
export function loginAction(user) {
    return async dispatch => {

        dispatch( login() )

        try {
            const  { data } = await axios.get(`/users?email=${user.email}`)
            
            if(data.length === 0) dispatch ( loginError( { 
                message: "El usuario o contraseña son incorrectos" 
            } ) )

            else dispatch( loginSuccess( data[0] ) )

        } catch (error) {
            dispatch( loginError(error) )
        }

    }
} 

const login = () => ({
    type: LOG_IN,
})

const loginSuccess = user => ({
    type: LOG_IN_SUCCESS,
    payload: user
})

const loginError = error => ({
    type: LOG_IN_ERROR,
    payload: error
})

// Salir o logout
export function logOutAction() {
    return async dispatch => {

        dispatch( logOut() )

    }
} 

const logOut = () => ({
    type: LOG_OUT,
})