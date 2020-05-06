import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatientConsultationsAction } from "../../../actions/consultationsAction";
import ConsultationList from '../ConsultationList';

const Statistics = () => {

    const dispatch = useDispatch()
    const current = useSelector(state => state.auth.current)
    const consultations = useSelector(state => state.consultations.data)
    const error = useSelector(state => state.consultations.error)

    useEffect(() => {
        
        dispatch( fetchPatientConsultationsAction(current.id) )

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
 
export default Statistics;