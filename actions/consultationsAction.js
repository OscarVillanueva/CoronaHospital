import { 
    FETCH_CONSULTATIONS,
    FETCH_CONSULTATIONS_SUCCESS,
    FETCH_CONSULTATIONS_ERROR,
    PUT_FOCUS_CONSULTATIONS,
    PUT_FOCUS_CONSULTATIONS_SUCCESS
} from "../types";
import axios from '../config/axios';

// Traer las consultas
export function fetchConsultationsAction(especiality) {
    return async dispatch => {
        dispatch( fetchConsultations() )

        try {
            
            const api = `/consultations?speciality=${especiality}&status=pending`
            const response = await axios.get(api)
            dispatch( fetchConsultationsSuccess(response.data) )

        } catch (error) {
            dispatch( fetchConsultationsError(error) )
        }
    }
} 

const fetchConsultations = () => ({
    type: FETCH_CONSULTATIONS,
})

const fetchConsultationsSuccess = data => ({
    type: FETCH_CONSULTATIONS_SUCCESS,
    payload: data
})

const fetchConsultationsError = error => ({
    type: FETCH_CONSULTATIONS_ERROR,
    payload: error
})

// Poner información en focus
export function putFocusDataAction(data) {
    return dispatch => {
        dispatch( putFocusData() )
        dispatch( putFocusDataSuccess(data) )
    }
} 

const putFocusData = () => ({
    type: PUT_FOCUS_CONSULTATIONS,
})

const putFocusDataSuccess = data => ({
    type: PUT_FOCUS_CONSULTATIONS_SUCCESS,
    payload: data
})