import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer';
import doctorReducer from './doctorReducer';
import consultationsReducer from './consultationsReduces';
import authReducer from './authReducer';

export default combineReducers({
    dashboard: dashboardReducer,
    services: doctorReducer,
    consultations: consultationsReducer,
    auth: authReducer
})