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
    PUT_FOCUS_CONSULTATIONS_SUCCESS,
    UPDATE_CONSULTATION_SUCCESS,
    UPDATE_CONSULTATION_ERROR,
    ADD_CONSULTATION,
    ADD_CONSULTATION_SUCCESS,
    ADD_CONSULTATION_ERROR
} from "../types";

const initialState = {
    data: [],
    focus: null,
    success: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PATIENT_CONSULTATIONS:
        case FETCH_DOCTOR_CONSULTATIONS:
        case FETCH_CONSULTATIONS: 
        case ADD_CONSULTATION: {
            return {
                ...state,
                data: [],
                success: null,
                error: null
            }
        }

        case FETCH_CONSULTATIONS_SUCCESS: 
        case FETCH_DOCTOR_CONSULTATIONS_SUCCESS: 
        case FETCH_PATIENT_CONSULTATIONS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                success: true,
                error: null
            }
        }

        case ADD_CONSULTATION_SUCCESS: {
            return {
                ...state,
                success: true,
                error: null
            }
        }

        case FETCH_CONSULTATIONS_ERROR: 
        case FETCH_DOCTOR_CONSULTATIONS_ERROR: 
        case FETCH_PATIENT_CONSULTATIONS_ERROR: 
        case ADD_CONSULTATION_ERROR: {
            return {
                ...state,
                data: null,
                success: false,
                error: action.payload
            }
        }

        case UPDATE_CONSULTATION_SUCCESS: {
            return {
                ...state,
                focus: action.payload,
                success: true,
                error: null
            }
        }

        case UPDATE_CONSULTATION_ERROR: {
            return {
                ...state,
                data: null,
                success: false,
                error: action.payload
            }
        }

        case PUT_FOCUS_CONSULTATIONS_SUCCESS: {
            return {
                ...state,
                success: true,
                error: null,
                focus: action.payload
            }
        }

        default:
            return state
    }
};

