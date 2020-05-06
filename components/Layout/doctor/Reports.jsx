import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ConsultationList from '../ConsultationList';
import { fetchDoctorConsultationsAction } from "../../../actions/consultationsAction";

const Reports = () => {

    const dispatch = useDispatch()
    const currentDoctor = useSelector(state => state.auth.current)
    const consultations = useSelector(state => state.consultations.data)
    const error = useSelector(state => state.consultations.error)

    useEffect(() => {
        
        dispatch( fetchDoctorConsultationsAction(currentDoctor.id) )

    }, [])  

    return ( 

        <>
            <ConsultationList 
                consultations = { consultations }
                error = { error }
            />
        </>
    );
}
 
export default Reports;