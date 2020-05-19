import { 
    FETCH_CONSULTATIONS,
    FETCH_CONSULTATIONS_SUCCESS,
    FETCH_CONSULTATIONS_ERROR,
    FETCH_DOCTOR_CONSULTATIONS,
    FETCH_DOCTOR_CONSULTATIONS_SUCCESS,
    FETCH_DOCTOR_CONSULTATIONS_ERROR,
    FETCH_PATIENT_CONSULTATIONS,
    FETCH_PATIENT_CONSULTATIONS_SUCCESS,
    FETCH_PATIENT_CONSULTATIONS_ERROR,
    PUT_FOCUS_CONSULTATIONS,
    PUT_FOCUS_CONSULTATIONS_SUCCESS,
    UPDATE_CONSULTATION,
    UPDATE_CONSULTATION_SUCCESS,
    UPDATE_CONSULTATION_ERROR,
    UPDATE_CONVERSATION,
    UPDATE_CONVERSATION_SUCCESS,
    UPDATE_CONVERSATION_ERROR,
    ADD_CONSULTATION,
    ADD_CONSULTATION_SUCCESS,
    ADD_CONSULTATION_ERROR
} from "../types";
// import axios from '../config/axios';
import firebase from '../firebase/firebase';

// Traer las consultas
export function fetchConsultationsAction(speciality) {
    return async dispatch => {
        dispatch( fetchConsultations() )

        try {
            
            // const api = `/consultations?speciality=${speciality}&status=pending`
            // const response = await axios.get(api)
            // Descargamos las consultas
            const response = await firebase.fetchWhere("consultations", "speciality", "==", speciality)

            const data = []

            response.forEach(doc => {

                if ( doc.data().status === "pending" )
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
            });

            dispatch( fetchConsultationsSuccess( data ) )

        } catch (error) {
            console.log(error);
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

// Traer las consultas que pertenecen al doctor
export function fetchDoctorConsultationsAction(id) {
    return async dispatch => {
        dispatch( fetchDoctorConsultations() )

        try {
            
            // const api = `/consultations?answerby.id=${id}`
            // const response = await axios.get(api)
            // Descargamos las consultas
            // Descargamos las consultas
            const response = await firebase.fetchWhere("consultations", "answerby.id", "==", id)

            const data = []

            response.forEach(doc => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            dispatch( fetchConsultationsSuccess( data ) )
            
        } catch (error) {
            dispatch( fetchDoctorConsultationsError(error) )
        }
    }
} 

const fetchDoctorConsultations = () => ({
    type: FETCH_DOCTOR_CONSULTATIONS,
})

const fetchDoctorConsultationsSuccess = data => ({
    type: FETCH_DOCTOR_CONSULTATIONS_SUCCESS,
    payload: data
})

const fetchDoctorConsultationsError = error => ({
    type: FETCH_DOCTOR_CONSULTATIONS_ERROR,
    payload: error
})

// Traer las consultas que pertenecen al paciente
export function fetchPatientConsultationsAction(id) {
    return async dispatch => {
        dispatch( fetchPatientConsultations() )

        try {
            
            // const api = `/consultations?patient.id=${id}`
            // const response = await axios.get(api)
            // Descargamos las consultas
            const response = await firebase.fetchWhere("consultations", "patient.id", "==", id)

            const data = []

            response.forEach(doc => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            dispatch( fetchConsultationsSuccess( data ) )

        } catch (error) {
            dispatch( fetchPatientConsultationsError(error) )
        }
    }
} 

const fetchPatientConsultations = () => ({
    type: FETCH_PATIENT_CONSULTATIONS,
})

const fetchPatientConsultationsSuccess = data => ({
    type: FETCH_PATIENT_CONSULTATIONS_SUCCESS,
    payload: data
})

const fetchPatientConsultationsError = error => ({
    type: FETCH_PATIENT_CONSULTATIONS_ERROR,
    payload: error
})

// Poner información en focus
export function putFocusDataAction(data) {
    return async dispatch => {
        dispatch( putFocusData() )

        firebase.db.collection("consultations").doc(data.id).onSnapshot(doc => {
            dispatch( putFocusDataSuccess(doc.data()) )
        })
        
    }
} 

const putFocusData = () => ({
    type: PUT_FOCUS_CONSULTATIONS,
})

const putFocusDataSuccess = data => ({
    type: PUT_FOCUS_CONSULTATIONS_SUCCESS,
    payload: data
})

// Actualizar las consultas
export function updateConsultationAction(consultation) {
    return async dispatch => {
        dispatch( updateConsultation() )

        try {
            // // primero traer el paciente
            // const response = await axios.get(`/users/${consultation.patient.id}`)
            // const user = response.data
            
            // // Revisar si el mismo estado no actualizar, Si es diferente actualizar
            // if(user.covid !== consultation.patient.covid){
            //     user.covid = consultation.patient.covid
            //     await axios.put(`/users/${consultation.patient.id}`, user)
            // }
            // Actualizamos el campo de covid en firebase
            firebase.addDocument(
                "users",
                consultation.patient.id, 
                { 
                    covid:  consultation.patient.covid 
                }
                , true)

            firebase.addDocument(
                "consultations", 
                consultation.id,
                consultation,
                true
            )   

            // const { data } = await axios.put(`/consultations/${consultation.id}`, consultation)
            dispatch( updateConsultationSuccess( consultation ) )

        } catch (error) {
            dispatch( updateConsultationError(error) )
        }
    }
} 

const updateConsultation = () => ({
    type: UPDATE_CONSULTATION,
})

const updateConsultationSuccess = consultation => ({
    type: UPDATE_CONSULTATION_SUCCESS,
    payload: consultation
})

const updateConsultationError = error => ({
    type: UPDATE_CONSULTATION_ERROR,
    payload: error
})

// Actualizar la conversación
export function updateConversationAction(consultation) {
    return async dispatch => {
        dispatch( updateConversation() )

        try {

            firebase.addDocument(
                "consultations", 
                consultation.id,
                consultation,
                true
            )

            // const {data} = await axios.put(`/consultations/${consultation.id}`, consultation)
            dispatch( updateConversationSuccess( consultation ) )

        } catch (error) {
            dispatch( updateConversationError(error) )
        }
    }
} 

const updateConversation = () => ({
    type: UPDATE_CONVERSATION,
})

const updateConversationSuccess = consultation => ({
    type: UPDATE_CONVERSATION_SUCCESS,
    payload: consultation
})

const updateConversationError = error => ({
    type: UPDATE_CONVERSATION_ERROR,
    payload: error
})

// Agregar una nueva consulta
export function addConsultationAction(consultation) {
    return async dispatch => {
        dispatch( addConsultation() )

        try {
            
            // Agregamos la consulta a firebase
            firebase.add("consultations", consultation)

            // const { data } = await axios.post(`/consultations`, consultation)
            dispatch( addConsultationSuccess(true) )

        } catch (error) {
            dispatch( addConsultationError(error) )
        }
    }
} 

const addConsultation = () => ({
    type: ADD_CONSULTATION,
})

const addConsultationSuccess = consultation => ({
    type: ADD_CONSULTATION_SUCCESS,
    payload: consultation
})

const addConsultationError = error => ({
    type: ADD_CONSULTATION_ERROR,
    payload: error
})