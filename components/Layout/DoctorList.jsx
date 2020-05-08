import React, { useState, useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector } from "react-redux";
import { Grid4, Container } from "../includes/Grid";
import axios from '../../config/axios';
import DoctorService from './DoctorService';

const DoctorList = () => {

    const [services, setServices] = useState([])
    const current = useSelector( state => state.auth.current )

    useEffect(() => {

        const fetchDoctors = async () => {
            const { data } = await axios.get(`/services?owner.id_ne=${current.id}`)
            setServices(data)
        }

        fetchDoctors()

    }, [])

    return ( 
        <Container>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Listado de Servicios
            </h1>

            <Grid4>

                {services.map(service => (
                    <DoctorService 
                        key = { service.id }
                        service = { service }
                    />
                ))}

            </Grid4>

        </Container>
    );
}
 
export default DoctorList;