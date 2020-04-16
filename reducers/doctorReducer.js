import { 
    FETCH_DOCTOR_SERVICES_SUCCESS, 
    FETCH_DOCTOR_SERVICES_ERROR, 
    ADD_DOCTOR_SERVICE_SUCCESS, 
    ADD_DOCTOR_SERVICE_ERROR, 
    UPDATE_DOCTOR_SERVICE_ERROR, 
    UPDATE_DOCTOR_SERVICE_SUCCESS,
    PUT_FOCUS_DATA_SUCCESS, 
} from "../types";

const initialState = {
    data: [],
    focus: null,
    success: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DOCTOR_SERVICES_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                success: true,
                error: null
            }
        }

        case FETCH_DOCTOR_SERVICES_ERROR:
        case ADD_DOCTOR_SERVICE_ERROR:
        case UPDATE_DOCTOR_SERVICE_ERROR: {
            return {
                ...state,
                data: null,
                success: false,
                error: action.payload
            }
        }

        case ADD_DOCTOR_SERVICE_SUCCESS: 
        case UPDATE_DOCTOR_SERVICE_SUCCESS: {
            return {
                ...state,
                success: true,
                error: null
            }
        }

        case PUT_FOCUS_DATA_SUCCESS: {
            return {
                ...state,
                success: true,
                error: null,
                focus: action.payload
            }
        }
        
        default:
            return state;
    }
};
