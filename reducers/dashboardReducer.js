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
                component: "checkConsultation"
            },
            {
                id: 2,
                title: "Reportes",
                type: "doctor",
                component: "reports"
            },
        ], 

        patient: [
            {
                id: 1,
                title: "Buscar",
                type: "patient",
                component: "search"
            },
            {
                id: 2,
                title: "Consultas",
                type: "patient",
                component: "createconsultation"
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
                type: "patient",
                component: "statistics"
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
