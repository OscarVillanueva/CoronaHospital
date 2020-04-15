import { UPDATE_CURRENT_COMPONENT } from "../types";

const initialState = {
    currentComponent: "",
    options: {
        doctor: [
            {
                id: 0,
                title: "Servicios",
                type: "doctor",
                component: "services"
            },
            {
                id: 1,
                title: "Atender consultas",
                type: "both",
                component: "consultationList"
            },
            {
                id: 2,
                title: "Reportes",
                type: "both",
                component: "reports"
            },
        ], 

        patient: [
            {
                id: 0,
                title: "Pedir Consulta",
                type: "patient",
                component: "consultationForm"
            },
            {
                id: 1,
                title: "Buscar",
                type: "patient",
                component: "search"
            },
            {
                id: 2,
                title: "Consultas",
                type: "both",
                component: "consultationList"
            },
            {
                id: 3,
                title: "e-Farmacia",
                type: "both",
                component: "pharmacy"
            },
            {
                id: 4,
                title: "Reportes",
                type: "both",
                component: "reports"
            },
        ]
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_CURRENT_COMPONENT: {
           return {
               ...state,
                currentComponent: action.payload
           }
        }

        default:
            return state
    }
};
