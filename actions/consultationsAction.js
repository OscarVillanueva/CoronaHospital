import { 
    FETCH_CONSULTATIONS,
    FETCH_CONSULTATIONS_SUCCESS,
    FETCH_CONSULTATIONS_ERROR,
    PUT_FOCUS_CONSULTATIONS,
    PUT_FOCUS_CONSULTATIONS_SUCCESS,
    UPDATE_CONSULTATION,
    UPDATE_CONSULTATION_SUCCESS,
    UPDATE_CONSULTATION_ERROR
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

// Actualizar servicios
export function updateConsultationAction(service) {
    return async dispatch => {
        dispatch( updateConsultation() )

        try {
            
            await axios.put(`/consultations/${service.id}`, service)
            dispatch( updateConsultationSuccess() )

        } catch (error) {
            dispatch( updateConsultationError(error) )
        }
    }
} 

const updateConsultation = () => ({
    type: UPDATE_DOCTOR_SERVICE,
})

const updateConsultationSuccess = () => ({
    type: UPDATE_DOCTOR_SERVICE_SUCCESS,
})

const updateConsultationError = error => ({
    type: UPDATE_DOCTOR_SERVICE_ERROR,
    payload: error
})