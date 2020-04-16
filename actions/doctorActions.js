import { 
    FETCH_DOCTOR_SERVICES,
    FETCH_DOCTOR_SERVICES_SUCCESS,
    FETCH_DOCTOR_SERVICES_ERROR,
    ADD_DOCTOR_SERVICE,
    ADD_DOCTOR_SERVICE_SUCCESS,
    ADD_DOCTOR_SERVICE_ERROR,
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
