import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { css } from "@emotion/core";
import { Container, Grid} from "../../../components/includes/Grid";
import { Field } from "../../../components/includes/Form";
import { ButtonLG } from "../../../components/includes/Button";
import Conversation from '../../../components/Layout/Conversation';
import DashboardHeader from '../../../components/Layout/DashboardHeader';

const Label = styled.p`
    font-weight: bold;
    font-size: 1.1rem;
    margin: 2rem 0;

    span {
        font-weight: 400;
    }
`

const Select = styled.select`

    width: 85%;
    display: block;
    padding: 0.4rem;
    -webkit-appearance: none;
    border-radius: 0.4rem;
    border: 1px solid #e1e1e1;
    font-size: 1.1rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        width: 100%;
    }
    
`

const Review = () => {

    // rich Editor text, Edtr.io, componente
    // const { localStorageRefence, component } = useEditor()
    const router = useRouter()
    const focus = useSelector(state => state.consultations.focus)
    
    const handleUpdateConsultation = () => {
        console.log("Actualizando");   
    }
    
    useEffect(() => {
        
        if(!focus) router.push("/dashboard")
        
    }, [])

    if(!focus || Object.keys(focus).length === 0) return null

    const { symptom, patient, status, comments,  prescription, bill } = focus
    const { name, allergies, preconditions, surgeries, birthday, email, covid } = patient

    return (
        <>
            
            <DashboardHeader />

            <Container>
                <h1 css = {css`
                    text-align: center;
                    margin-top: 3rem;
                `}>
                    Consulta de Peter Child
                </h1>

                <Grid>

                    <div
                        css = {css`
                            margin-top: 2rem;
                            margin-bottom: 4rem;
                        `}
                    >
                       <>
                           <h1>Datos del paciente</h1>
    
                            <Label>
                                Nombre: <span>{name}</span>
                            </Label>
    
                            <Label>
                                Alergias: <span>{allergies}</span>
                            </Label>
    
                            <Label>
                                Enfermedades Cronicas: <span>{preconditions}</span>
                            </Label>
    
                            <Label>
                                Cirigías: <span>{surgeries}</span>
                            </Label>
    
                            <Label>
                                Fecha de Nacimiento: <span>{birthday}</span>
                            </Label>
    
                            <Label>
                                Email: <span>{email}</span>
                            </Label>

                            <Label>
                                Covid-19:
                            </Label>

                            <Select name="status" id="status" value = {covid}>
                                <option value="free">Libre</option>
                                <option value="suspect">Posible Caso</option>
                                <option value="infected">Infectado</option>
                            </Select>

                            <Label>
                                Canalizar:
                            </Label>

                            <Field
                                css = {css`
                                    @media (min-width: 768px) {
                                        width: 85%;
                                    }
                                `}
                            >
                                <input 
                                    type = "text" 
                                    name = "change"
                                    id = "change"
                                    placeholder = "Escribe . . ."
                                />
                            </Field>

                            <Label>
                                Estado de la consulta: 
                            </Label>

                            <Select name="status" id="status" value = {status}>
                                <option value="pending">Pendiente</option>
                                <option value="close">Revisada</option>
                            </Select>

                            <Label>
                                Total: 
                            </Label>

                            <Field
                                css = {css`
                                    @media (min-width: 768px) {
                                        width: 85%;
                                    }
                                `}
                            >
                                <input 
                                    type = "number" 
                                    name = "bill"
                                    id = "bill"
                                    value = { bill }
                                    placeholder = "100"
                                />
                            </Field>

                            <Label>
                                Recetar: 
                            </Label>

                            <Field
                                css = {css`
                                    @media (min-width: 768px) {
                                        width: 85%;
                                    }
                                `}
                            >
                                <textarea
                                    name="prescription" 
                                    id="prescription" 
                                    // value = {prescription}
                                >
                                </textarea>
                            </Field>

                       </>

                    </div>

                    <div
                        css = {css`
                            margin-top: 2rem;
                        `}
                    >
                        <h1>Síntomas</h1>

                        <Label>
                            <span>
                                {symptom}
                            </span>
                        </Label>

                        <div>
                            
                            <Conversation />

                        </div>

                        <ButtonLG
                            onClick = {handleUpdateConsultation}
                        >
                            Actualizar Consulta
                        </ButtonLG>

                    </div>
                </Grid>

            </Container>
        </>
    );
}
 
export default Review;