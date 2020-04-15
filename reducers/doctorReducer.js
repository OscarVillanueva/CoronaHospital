import { FETCH_DOCTOR_SERVICES_SUCCESS, FETCH_DOCTOR_SERVICES_ERROR } from "../types";

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

        case FETCH_DOCTOR_SERVICES_ERROR: {
            return {
                ...state,
                data: null,
                success: false,
                error: action.payload
            }
        }

        default:
            return state;
    }
};
