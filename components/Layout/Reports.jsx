import React, { useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import ConsultationList from '../Layout/ConsultationList';
import { Container } from "../includes/Grid";
import { fetchDoctorConsultationsAction } from "../../actions/consultationsAction";

const Reports = () => {

    const dispatch = useDispatch()
    const currentDoctor = useSelector(state => state.auth.current)

    useEffect(() => {
        
        dispatch( fetchDoctorConsultationsAction(currentDoctor.id) )

    }, [])  

    return ( 

        <>
            <ConsultationList />
        </>
    );
}
 
export default Reports;