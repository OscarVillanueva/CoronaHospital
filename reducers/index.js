import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer';
import doctorReducer from './doctorReducer';
import consultationsReducer from './consultationsReduces';

export default combineReducers({
    dashboard: dashboardReducer,
    services: doctorReducer,
    consultations: consultationsReducer,
})