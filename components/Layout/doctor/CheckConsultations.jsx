import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ConsultationList from '../ConsultationList';
import { fetchConsultationsAction } from "../../../actions/consultationsAction";

const CheckConsultations = () => {

    const dispatch = useDispatch()
    const currentDoctor = useSelector(state => state.auth.current)
    const consultations = useSelector(state => state.consultations.data)
    const error = useSelector(state => state.consultations.error)

    useEffect(() => {
        
        dispatch( fetchConsultationsAction(currentDoctor.speciality) )

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
 
export default CheckConsultations;