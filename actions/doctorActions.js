import { 
    FETCH_DOCTOR_SERVICES,
    FETCH_DOCTOR_SERVICES_SUCCESS,
    FETCH_DOCTOR_SERVICES_ERROR,
} from "../types";

const test = [
    {
        id: 1,
        title: "Servicio 1",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore saepe enim ipsum, eum praesentium? Sed provident odit porro distinctio sint neque explicabo, unde quae, eligendi optio corporis atque sit!",
        price: 400
    },
    {
        id: 2,
        title: "Servicio 2",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore saepe enim ipsum, eum praesentium? Sed provident odit porro distinctio sint neque explicabo, unde quae, eligendi optio corporis atque sit!",
        price: 1400
    },
    {
        id: 3,
        title: "Servicio 3",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore saepe enim ipsum, eum praesentium? Sed provident odit porro distinctio sint neque explicabo, unde quae, eligendi optio corporis atque sit!",
        price: 4000
    },
]

// Traer los servicios
export function fetchDoctorServicesAction(doctorID) {
    return dispatch => {
        dispatch( fetchDoctorServices() )

        if(1 === doctorID)
            dispatch( fetchDoctorServicesSuccess(test) )
        else 
            dispatch( fetchDoctorServicesError({code: "badrequest", msg: "Hubo Un error"}) )
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
