import { 
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOG_OUT,
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR
} from "../types/index";

const initialState = {
    current: null,
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case REGISTER: 
        case LOG_IN: {
            return {
                ...state,
                loading: true
            }
        }

        case REGISTER_SUCCESS: 
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                current: action.payload,
                error: null,
                loading: false
            }
        }

        case REGISTER_ERROR: 
        case LOG_IN_ERROR: {
            return {
                ...state,
                current: null,
                error: action.payload,
                loading: false
            }
        }

        case LOG_OUT: {
            return {
                ...state,
                current: null,
                error: null,
                loading: false
            }
        }

        default:
            return state
    }
};
