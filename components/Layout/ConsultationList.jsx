import React, { useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import Consultation from '../Layout/Consultation';
import { Container, ListRow } from "../includes/Grid";
import { fetchConsultationsAction } from "../../actions/consultationsAction";
import { Alert } from "../includes/Alert";

const ConsultationList = ({ consultations,  error }) => {

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