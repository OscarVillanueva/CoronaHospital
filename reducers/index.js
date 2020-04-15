import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer';
import doctorReducer from './doctorReducer';

export default combineReducers({
    dashboard: dashboardReducer,
    doctor: doctorReducer
})