import { 
    FETCH_DOCTOR_SERVICES,
    FETCH_DOCTOR_SERVICES_SUCCESS,
    FETCH_DOCTOR_SERVICES_ERROR,
    ADD_DOCTOR_SERVICE,
    ADD_DOCTOR_SERVICE_SUCCESS,
    ADD_DOCTOR_SERVICE_ERROR,
    UPDATE_DOCTOR_SERVICE,
    UPDATE_DOCTOR_SERVICE_SUCCESS,
    UPDATE_DOCTOR_SERVICE_ERROR,
    DELETE_DOCTOR_SERVICE,
    DELETE_DOCTOR_SERVICE_SUCCESS,
    DELETE_DOCTOR_SERVICE_ERROR,
    PUT_FOCUS_DATA,
    PUT_FOCUS_DATA_SUCCESS 
} from "../types";
import axios from '../config/axios';

// Traer los servicios
export function fetchDoctorServicesAction(doctorID) {
    return async dispatch => {
        dispatch( fetchDoctorServices() )

        try {
            
            const response = await axios.get(`/services?owner=${doctorID}`)
            dispatch( fetchDoctorServicesSuccess(response.data) )

        } catch (error) {
            dispatch( fetchDoctorServicesError(error) )
        }
    }
} 

const fetchDoctorServices = () => ({
    type: FETCH_DOCTOR_SERVICES,
})

const fetchDoctorServicesSuccess = data => ({
    type: FETCH_DOCTOR_SERVICES_SUCCESS,
    payload: data
})

const fetchDoctorServicesError = error => ({
    type: FETCH_DOCTOR_SERVICES_ERROR,
    payload: error
})

// Agregar servicios
export function addServiceAction(service) {
    return async dispatch => {
        dispatch( addService() )

        try {
            
            await axios.post("/services", service)
            dispatch( addServiceSuccess() )

        } catch (error) {
            dispatch( addServiceError(error) )
        }
    }
} 

const addService = () => ({
    type: ADD_DOCTOR_SERVICE,
})

const addServiceSuccess = () => ({
    type: ADD_DOCTOR_SERVICE_SUCCESS,
})

const addServiceError = error => ({
    type: ADD_DOCTOR_SERVICE_ERROR,
    payload: error
})

// Actualizar servicios
export function updateServiceAction(service) {
    return async dispatch => {
        dispatch( updateService() )

        try {
            
            await axios.put(`/services/${service.id}`, service)
            dispatch( updateServiceSuccess() )

        } catch (error) {
            dispatch( updateServiceError(error) )
        }
    }
} 

const updateService = () => ({
    type: UPDATE_DOCTOR_SERVICE,
})

const updateServiceSuccess = () => ({
    type: UPDATE_DOCTOR_SERVICE_SUCCESS,
})

const updateServiceError = error => ({
    type: UPDATE_DOCTOR_SERVICE_ERROR,
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
    type: PUT_FOCUS_DATA,
})

const putFocusDataSuccess = data => ({
    type: PUT_FOCUS_DATA_SUCCESS,
    payload: data
})

// Actualizar servicios
export function deleteServiceAction(service) {
    return async dispatch => {
        dispatch( deleteService() )

        try {
            
            await axios.delete(`/services/${service.id}`)
            dispatch( deleteServiceSuccess() )

        } catch (error) {
            dispatch( deleteServiceError(error) )
        }
    }
} 

const deleteService = () => ({
    type: DELETE_DOCTOR_SERVICE,
})

const deleteServiceSuccess = () => ({
    type: DELETE_DOCTOR_SERVICE_SUCCESS,
})

const deleteServiceError = error => ({
    type: DELETE_DOCTOR_SERVICE_ERROR,
    payload: error
})