import React, { useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import { Button } from "../../includes/Button";
import MedicalService from './MedicalService';
import { Container, Row, ListRow } from "../../includes/Grid";
import { fetchDoctorServicesAction } from "../../../actions/doctorActions";

const Services = () => {

    const services = useSelector(state => state.doctor.data)
    const currentDoctor = {id: 1}
    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch( fetchDoctorServicesAction(currentDoctor.id) )

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
                <Link href = "/doctor/add">
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
                    : (null) 
                }

            </ListRow>

        </Container>
    );
}
 
export default Services;