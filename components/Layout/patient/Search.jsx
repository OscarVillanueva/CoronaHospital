import React, { useState, useEffect } from 'react';
import { css } from "@emotion/core";
import styled from '@emotion/styled';
import SpecialitySelect from './SpecialitySelect';
import axios from '../../../config/axios';
import firebase from '../../../firebase/firebase';
import { Form, Field, InputSubmit } from '../../includes/Form';
import { RawRow } from "../../includes/Grid";
import { Alert } from '../../includes/Alert';
import DoctorServices from './DoctorServices';

const Container = styled.div`
    width: 100%;
    margin: 0 1rem 1rem 0;

    &:last-of-type {
        margin-right: 0;
    }

    label {
        margin-bottom: 0.5rem;
        display: block;
    }
`

const Search = () => {

    const [speciality, setSpeciality] = useState("")
    const [state, setState] = useState("")
    const [service, setService] = useState("")
    const [alert, setAlert] = useState(null)
    const [services, setServices] = useState([])
    const [filtered, setFilteredServices] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (speciality !== "" || state.trim() !== ""|| service.trim() !== "") 
            searchService()
        else {
            setAlert("Debes indicar algún parametro para buscar")

            setTimeout(() => {
                setAlert(null)
            }, 2000);
        }
    }

    useEffect(() => {
        
        const fetchServices = async () => {
            
            const response = await firebase.db.collection("services").get()
    
            const data = []
    
            response.forEach(doc => {
    
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
    
            });
    
            setServices(data)
        }

        fetchServices()


    }, [])


    const searchService = async () => {
        // let url = "/services?"
        // url = state.trim() !== "" ? `${url}owner.state=${state}` : url
        // url = speciality.trim() !== "" ? `${url}&owner.speciality=${speciality}` : url
        // url = service.trim() !== "" ? `${url}&details_like=${service}` : url
        
        try{

            // const { data } = await axios.get(url)

           const match = services.filter( e => {
                return (e.owner.state === state 
                    || e.owner.speciality === speciality 
                    || ( service.trim() !== "" && e.details.includes(service) ))
           })

           setFilteredServices(match)

        }
        catch(error) {
            console.log(error);
            setAlert("Hubo un error, intenta más tarde")
        }

    }

    return ( 
        <>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Buscar
            </h1>
    
            <Form onSubmit = {handleSubmit}>
    
                { alert && <Alert>{alert}</Alert> }

                <RawRow>

                    <Container>
                        <label 
                            htmlFor="service"
                            css = {css`
                                margin-bottom: 0.5rem;
                                display: block;
                            `}
                        >
                            Servicio
                        </label>
        
                        <Field>
                            <input
                                type = "text"
                                name="service" 
                                id="service" 
                                value = {service}
                                onChange = { e => setService(e.target.value)}
                                placeholder = "Palabra clave del servicio a buscar"
                            />
                        </Field>
                    </Container>
    
                    <Container>
                        <label 
                            htmlFor="state"
                            css = {css`
                                margin-bottom: 0.5rem;
                                display: block;
                            `}
                        >
                            Estado
                        </label>
        
                        <Field>
                            <input
                                type = "text"
                                name="state" 
                                id="state" 
                                value = {state}
                                onChange = { e => setState(e.target.value) }
                                placeholder = "Guanajuato"
                            />
                        </Field>
                    </Container>

                </RawRow>
        
                <SpecialitySelect 
                    setSpeciality = { setSpeciality }
                />

                <InputSubmit 
                    type="submit" 
                    value="Buscar"
                    className = "mt-3"
                />
    
            </Form>

            <DoctorServices 
                services = { filtered }
            />
        </>
    );
}
 
export default Search;