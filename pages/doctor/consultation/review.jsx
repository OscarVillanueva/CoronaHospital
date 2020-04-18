import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { css } from "@emotion/core";
import { Container, Grid} from "../../../components/includes/Grid";
import { Field, Error } from "../../../components/includes/Form";
import { ButtonLG } from "../../../components/includes/Button";
import { updateConsultationAction } from "../../../actions/consultationsAction";
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

    const router = useRouter()
    const dispatch = useDispatch()
    const currentDoctor = {id: 1, name: "Doctor. House"}
    const focus = useSelector(state => state.consultations.focus)
    const [current, saveCurrent] = useState(focus)
    const [errors, saveError] = useState({})

    useEffect(() => {
        
        if(!current) router.push("/dashboard")
        
    }, [])

    if(!current || Object.keys(current).length === 0) return null

    const { symptom, patient, status, prescription, bill } = current
    const { name, allergies, preconditions, surgeries, birthday, email, covid } = patient

    const handleUpdateConsultation = () => {
        
        if(isValidate())
            dispatch( updateConsultationAction({...current, answerby: currentDoctor}) )
        else 
            console.log("No podemos guardar");
           
    }

    const handleChange = e => {

        switch (e.target.name) {
            case "covid":

                const temp = {
                    ...patient,
                    [e.target.name]: e.target.value
                }
    
                saveCurrent({
                    ...current,
                    patient: temp
                })
                
                break;

            default:
                saveCurrent({
                    ...current,
                    [e.target.name]: e.target.value
                })
                break;
        }
        
    }

    const isValidate = () => {

        let missing = {}

        if(status === "close"){
            if(Number(bill) <= 0) {
                
                missing = {
                    ...missing,
                    bill: "Debes ingresar un total válido"
                }
            }

            if(prescription.trim() === "") {

                missing = {
                    ...missing,
                    prescription: "Debes dar una receta antes de actualizar"
                }

            }

            saveError(missing)
        }
      
        return !(Object.keys(missing).length > 0)
    }

    const handleKeyDown = e => {
        if(e.keyCode === 9 || e.which === 9) {
            e.preventDefault()
            const start = e.target.selectionStart
            const end = e.target.selectionEnd

            let previous = e.target.value
            const newValue = previous.substring(0, start) + "\t" + previous.substring(end)

            e.target.selectionEnd = start + 1

            handleChange({
                target: {
                    name: "prescription",
                    value: newValue
                }
            })

        }   
    }

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

                            <Select 
                                name="covid" 
                                id="covid" 
                                value = {covid}
                                onChange = {handleChange}
                            >
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
                                    onChange = {handleChange}
                                    placeholder = "Escribe . . ."
                                />
                            </Field>

                            <Label>
                                Estado de la consulta: 
                            </Label>

                            <Select 
                                name="status" 
                                id="status" 
                                value = {status}
                                onChange = {handleChange}
                            >
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
                                    onChange = {handleChange}
                                    placeholder = "100"
                                />
                            </Field>

                            { errors.bill 
                                && <Error 
                                        css = {css`
                                            @media (min-width: 768px) {
                                                width: 85%;
                                            }
                                        `}
                                    >
                                        {errors.bill}
                                    </Error> }

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
                                    css = {css`
                                        white-space: pre-wrap;
                                    `}
                                    name="prescription" 
                                    id="prescription" 
                                    value = {prescription}
                                    onChange = {handleChange}
                                    onKeyDown = {handleKeyDown}
                                >
                                </textarea>
                            </Field>

                            { errors.prescription 
                                && <Error 
                                        css = {css`
                                            @media (min-width: 768px) {
                                                width: 85%;
                                            }
                                        `}
                                    >
                                        {errors.prescription}
                                    </Error> 
                            }

                            <ButtonLG
                                css = {css`
                                    margin-top: 3rem;
                                    @media (min-width: 768px) {
                                        width: 85%;
                                    }
                                `}
                                onClick = {handleUpdateConsultation}
                            >
                                Actualizar Consulta
                            </ButtonLG>

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

                        <Conversation />

                    </div>
                </Grid>

            </Container>
        </>
    );
}
 
export default Review;