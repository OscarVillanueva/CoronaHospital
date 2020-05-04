import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelector } from "react-redux";
import { css } from "@emotion/core";
import { Form, Field, InputSubmit, Error } from '../../includes/Form';
import axios from '../../../config/axios';
import useValidation from '../../../hooks/useValidation';
import validateConsultation from '../../../validation/validateConsultation';

const INITIAL_STATE = {
    symptom: "",
    speciality: ""
}

const CreateConsultation = () => {

    const [specialities, setSpecialities] = useState([])
    const current = useSelector( state => state.auth.current )

    useEffect(() => {

        const fetchSpecialities = async () => {
            const { data } = await axios.get("/specialities")
            setSpecialities(data)
        }

        fetchSpecialities()

    }, [])

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useValidation(INITIAL_STATE, validateConsultation, createConsultation)

    const { symptom, speciality } = values

    function createConsultation() {
        const newConsultation = {
            symptom,
            speciality,
            status: "pending",
            comments: [],
            prescription: "",
            bill: 0,
            patient: {
                id: current.id,
                name: current.name,
                email: current.email,
                allergies: current.allergies,
                preconditions: current.preconditions,
                surgeries: current.surgeries,
                birthday: current.birthday,
                covid: current.covid
            },
            answerby: {}
        }

        console.log(newConsultation);
    }

    const handleSelectChange = (option) => {
        const target = {
            target : {
                value: option.title,
                name: "speciality"
            }
        }
        handleChange(target)
    }    

    return ( 
        <>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Nueva consulta
            </h1>
    
            <Form onSubmit = {handleSubmit}>
    
            {/* { registerError && 
                <Alert>
                    {registerError.message}
                </Alert> 
            } */}
    
            <label 
                htmlFor="symptom"
                css = {css`
                    margin-bottom: 0.5rem;
                    display: block;
                `}
            >
                Sintomas
            </label>
            <Field>
                <textarea
                    name="symptom" 
                    id="symptom" 
                    value = {symptom}
                    onChange = {handleChange}
                >
                </textarea>
            </Field>
    
            { errors.symptom && <Error>{errors.symptom}</Error> }
    
            <label 
                htmlFor="speciality"
                css = {css`
                    margin-bottom: 0.5rem;
                    display: block;
                `}
            >
                Especialidad
            </label>

            <Select
                options = { specialities }
                onChange = { option => handleSelectChange(option) }
                getOptionValue = { options => options.id}
                getOptionLabel = { options => options.title}
                placeholder = "Seleccione la especialidad"
                noOptionsMessage = { () => "No hay resultados" }
            />
    
            { errors.speciality && <Error>{errors.speciality}</Error> }
    
            <InputSubmit 
                type="submit" 
                value="Entrar"
                className = "mt-3"
            />
    
            </Form>
        </>
    );
}
 
export default CreateConsultation;