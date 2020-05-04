import React, { useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import { Button } from "../../includes/Button";
import MedicalService from './MedicalService';
import { Container, Row, ListRow } from "../../includes/Grid";
import { Alert } from "../../includes/Alert";
import { fetchDoctorServicesAction } from "../../../actions/doctorActions";

const Services = () => {

    const services = useSelector(state => state.services.data)
    const error = useSelector(state => state.services.error)
    const currentDoctor = useSelector(state => state.auth.current)
    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch( fetchDoctorServicesAction( currentDoctor.id ) )

    }, [])

    return ( 
        <Container>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Servicios
            </h1>
    
            <Row>
                <Link href = "/doctor/service/add">
                    <Button>Nuevo</Button>
                </Link>
            </Row>

            <ListRow>
                { services && services.length > 0
                    ? (
                        <>
                            {services.map(service => (
                                <MedicalService 
                                    key = {service.id}
                                    service = {service}
                                />
                            ))}
                        </>
                    ) 
                    : (
                        <>
                            { error 
                                ? <Alert>Hubo un error, intente más tarde</Alert> 
                                : (
                                    <Alert>Aún no tienes registrado ningún servicio</Alert>
                                ) 
                            }
                        </>
                    ) 
                }

            </ListRow>

        </Container>
    );
}
 
export default Services;