import { 
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "../types/index";

const initialState = {
    current: null,
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case REGISTER: {
            return {
                ...state,
                loading: true
            }
        }

        case REGISTER_SUCCESS: {
            return {
                ...state,
                current: action.payload,
                error: null,
                loading: false
            }
        }

        case REGISTER_ERROR: {
            return {
                ...state,
                current: null,
                error: action.payload,
                loading: false
            }
        }

        default:
            return state
    }
};
