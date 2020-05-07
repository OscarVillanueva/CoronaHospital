import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from "next/router";
import { css } from "@emotion/core";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../components/includes/Grid";
import { Field, InputSubmit, Form, Error } from "../../../components/includes/Form";
import useValidation from '../../../hooks/useValidation';
import validateService from '../../../validation/validateService';
import { addServiceAction } from "../../../actions/doctorActions";

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

const Logo = styled.p`
    color: var(--secondary);
    font-size: 3rem;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    text-align: center;

    @media (min-width: 768px) {
        line-height: 0;
    }
`

const Bar = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

const INITIAL_STATE = {
    title: "",
    details: "",
    price: 0
}

const AddService = () => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useValidation(INITIAL_STATE, validateService, addService)

    const dispatch = useDispatch()
    const router = useRouter()

    const currentDoctor = useSelector(state => state.auth.current)

    const success = useSelector(state => state.services.success)
    const error = useSelector(state => state.services.error)
    const [submitted, saveSubmitted] = useState(false)
    const { title, details, price } = values

    useEffect(() => {
        
        if(!error && submitted && success){
            router.push("/dashboard")
        }

    }, [success])

    function addService() {
        
        const newService = {
            ...values,
            owner: {
                id: currentDoctor.id,
                name: currentDoctor.name,
                lastName: currentDoctor.lastName,
                email: currentDoctor.email,
                speciality: currentDoctor.speciality,
                state: currentDoctor.state,
            }
        }
        dispatch( addServiceAction( newService ) )
        saveSubmitted(true)
    }

    return ( 
        <>
            <header
                css = {css`
                    background-color: var(--primary);
                    padding: 1.1rem;
                `}
            >
    
                <HeaderContainer>
    
                    <Bar>
    
                        <Link href = "/dashboard">
                            <Logo>Covid's Hospital</Logo>
                        </Link>
        
                    </Bar>
    
                </HeaderContainer>
    
            </header>

            <Container>

                <h1 css = {css` 
                    text-align:center;
                `}>
                    Agregar Nuevo Servicio
                </h1>

                <div className="mt-4 mb-4">
                    <Form onSubmit = {handleSubmit}>

                        <Field>
                            <label htmlFor="title">Nombre del servicio</label>
                            <input 
                                type = "text" 
                                name = "title" 
                                id = "title"
                                value = {title}
                                onChange = {handleChange}
                                placeholder = "El nombre del servicio"
                            />
                        </Field>

                        { errors.title && <Error>{errors.title}</Error> }

                        <Field>
                            <label htmlFor="details">Detalles: </label>
                            <textarea
                                name="details" 
                                id="details"
                                value = {details}
                                onChange = {handleChange} 
                                placeholder = "Detalles del servicio"
                            >
                            </textarea>
                        </Field>

                        { errors.details && <Error>{errors.details}</Error> }

                        <Field>
                            <label htmlFor="price">Precio</label>
                            <input 
                                type = "number" 
                                name = "price" 
                                id = "price"
                                value = {price}
                                onChange = {handleChange}
                                placeholder = "El nombre del servicio"
                            />
                        </Field>

                        { errors.price && <Error>{errors.price}</Error> }

                        <InputSubmit 
                            type="submit" 
                            value="Agregar servicio"
                            />

                        { error && <Error>{error.message}</Error> }
                    </Form>


                </div>

            </Container>

        </>
    );
}
 
export default AddService;