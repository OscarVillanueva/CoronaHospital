import React, { useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import Consultation from '../Layout/Consultation';
import { Container, ListRow } from "../includes/Grid";
import { fetchConsultationsAction } from "../../actions/consultationsAction";
import { Alert } from "../includes/Alert";

const ConsultationList = () => {

    const consultations = useSelector(state => state.consultations.data)
    const error = useSelector(state => state.consultations.error)
    const currentDoctor = {id: 1, speciality: "x"}
    const dispatch = useDispatch()

    useEffect(() => {
        
        if(consultations.length === 0)
            dispatch( fetchConsultationsAction(currentDoctor.speciality) )

    }, [])

    return ( 
        <Container>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Listado de consultas
            </h1>

            <ListRow>

                { consultations && consultations.length > 0
                    ? (
                        <>
                            {consultations.map(consultation => (
                                <Consultation 
                                    key = {consultation.id}
                                    consultation = {consultation}
                                />
                            ))}
                        </>
                    ) 
                    : (
                        <>
                            { error 
                                ? <Alert>Hubo un error, intente más tarde</Alert> 
                                : (
                                    <Alert>Aún no hay consultas</Alert>
                                ) 
                            }
                        </>
                    ) 
                }
            </ListRow>
            
        </Container>
    );
}
 
export default ConsultationList;