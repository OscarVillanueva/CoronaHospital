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
    PUT_FOCUS_SERVICE,
    PUT_FOCUS_SERVICE_SUCCESS 
} from "../types";
import axios from '../config/axios';
import firebase from '../firebase/firebase';

// Traer los servicios
export function fetchDoctorServicesAction(doctorID) {
    return async dispatch => {
        dispatch( fetchDoctorServices() )

        try {
            const response = await firebase.fetchWhere("services", "owner.id", "==", doctorID)

            const data = []

            response.forEach(doc => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            // const response = await axios.get(`/services?owner.id=${doctorID}`)
            dispatch( fetchDoctorServicesSuccess( data ) )

        } catch (error) {
            console.log(error);
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
            
            // Agregar a firebase
            firebase.add("services", service)

            // await axios.post("/services", service)
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
            
            // Actualizar el servicio en firebase
            firebase.addDocument("services", service.id, service, true)

            // await axios.put(`/services/${service.id}`, service)
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
    type: PUT_FOCUS_SERVICE,
})

const putFocusDataSuccess = data => ({
    type: PUT_FOCUS_SERVICE_SUCCESS,
    payload: data
})

// Borrar servicios
export function deleteServiceAction(service) {
    return async dispatch => {
        dispatch( deleteService() )

        try {

            // Borramos el documento de firebase
            firebase.deleteDocument("services", service.id)

            // await axios.delete(`/services/${service.id}`)
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