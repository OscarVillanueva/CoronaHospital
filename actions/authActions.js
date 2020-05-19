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
import firebase from '../firebase/firebase';

// Registrar un nuevo usuario
export function registerUserAction(user) {

    return async dispatch => {

        dispatch( registerUser() )

        try {

            // Registramos el usuario en firebase
            const newUser = await firebase.signup(user.email, user.password)

            // city, state, country, parsearmos la localización
            const { city, state, country } = user
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${city},${state},${country}&key=${process.env.GEO_KEY}`
            const location = await axios.get(url)
            
            user.geometry = location.data.results[0].geometry

            // agregamos el id al usuario
            user.id = newUser.uid

            // Quitamos la contraseña
            delete user.password
            firebase.addDocument("users", newUser.uid, user, false)
            
            // const { data } = await axios.post("/users", user)

            if(user.type === "doctor") 
                firebase.add("specialities", { title: user.speciality })
                // await axios.post("/specialities", { title: user.speciality })

            dispatch( registerUserSuccess( user ) )

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

            // Firebase
            const current =  await firebase.signin(user.email, user.password)

            // Traer la información del usuario
            const info = await firebase.db.collection("users").doc( current.user.uid ).get()

            if ( info.exists ) dispatch(loginSuccess({ ...info.data(), id: current.user.uid } ))
            else
                dispatch(loginSuccess({
                    address: "Una Calle",
                    city: "Penjamo",
                    country: "México",
                    email: current.user.email,
                    geometry: { lat: 20.4313763, lng: -101.7241184 },
                    lastName: "",
                    name: current.user.displayName,
                    phone: "1234567890",
                    state: "Guanajuato",
                    type: "patient",
                    user: "asdfasdf",
                    birthday: "",
                    preconditions: "",
                    surgeries: "",
                    allergies: "",
                    covid: "free",
                }))

            // const  { data } = await axios.get(`/users?email=${user.email}`)
            
            // if(data.length === 0) dispatch ( loginError( { 
            //     message: "El usuario o contraseña son incorrectos" 
            // }))

            // else dispatch( loginSuccess( data[0] ) )

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

        // sign out of firebase
        firebase.signout()

        dispatch( logOut() )

    }
} 

const logOut = () => ({
    type: LOG_OUT,
})