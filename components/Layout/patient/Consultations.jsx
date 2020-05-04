import React, { useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import Consultation from '../../Layout/Consultation';
import { Container, ListRow } from "../../includes/Grid";
import { fetchPatientConsultationsAction } from "../../../actions/consultationsAction";
import { Alert } from "../../includes/Alert";

const ConsultationList = () => {

    const consultations = useSelector(state => state.consultations.data)
    const error = useSelector(state => state.consultations.error)
    const currentPatient = useSelector(state => state.auth.current)
    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch( fetchPatientConsultationsAction(currentPatient.id) )

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