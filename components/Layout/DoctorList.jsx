import React, { useState, useEffect } from 'react';
import { css } from "@emotion/core";
import { useSelector } from "react-redux";
import { Grid4, Container } from "../includes/Grid";
import axios from '../../config/axios';
import firebase from '../../firebase/firebase';
import DoctorService from './DoctorService';

const DoctorList = () => {

    const [services, setServices] = useState([])
    const current = useSelector( state => state.auth.current )

    useEffect(() => {

        const fetchDoctors = async () => {

            const response = await firebase.db.collection("services").get()

            const data = []

            response.forEach(doc => {

                // Solo guardamos los que son diferentes
                if ( doc.data().owner.id !== current.id )
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })

            });

            // const { data } = await axios.get(`/services?owner.id_ne=${current.id}`)
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