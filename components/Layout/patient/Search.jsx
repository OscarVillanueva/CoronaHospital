import React, { useEffect, useState } from 'react';
import { css } from "@emotion/core";
import styled from '@emotion/styled';
import SpecialitySelect from './SpecialitySelect';
import { Form, Field, InputSubmit } from '../../includes/Form';
import { RawRow } from "../../includes/Grid";

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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        
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
                                
                            />
                        </Field>
                    </Container>

                </RawRow>
        
                <SpecialitySelect 
                    setSpeciality = { setSpeciality }
                />

                <InputSubmit 
                    type="submit" 
                    value="Enviar consulta"
                    className = "mt-3"
                />
    
            </Form>
        </>
    );
}
 
export default Search;