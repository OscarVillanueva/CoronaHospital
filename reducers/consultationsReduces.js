import { 
    FETCH_CONSULTATIONS_SUCCESS, 
    FETCH_CONSULTATIONS_ERROR,
    PUT_FOCUS_CONSULTATIONS_SUCCESS,
    UPDATE_CONSULTATION_SUCCESS,
    UPDATE_CONSULTATION_ERROR
} from "../types";

const initialState = {
    data: [],
    focus: null,
    success: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_CONSULTATIONS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                success: true,
                error: null
            }
        }

        case FETCH_CONSULTATIONS_ERROR: {
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

