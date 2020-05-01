import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from '../components/Layout/Layout';
import { Field, InputSubmit, Error } from '../components/includes/Form';
import { Alert } from "../components/includes/Alert";
import validateRegister from '../validation/validateRegister';
import useValidation from '../hooks/useValidation';
import { registerUserAction } from "../actions/authActions";

const GridForm = styled.form`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        row-gap: 2rem;
    }
`

const Label = styled.label`
    text-align: center;
`

const INITIAL_STATE = {
    name: "",
    lastName: "",
    address: "",
    state: "",
    city: "",
    country: "",
    phone: "",
    user: "",
    email: "",
    password: "",
    patient: {
        birthday: "",
        allergies: "",
        preconditions: "",
        surgeries: ""
    },
    doctor: {
        specialty: "",
        document: ""
    },
    type: "patient"
}

const Signup = () => {

    const [type, saveType] = useState("patient")
    const [registerError, setRegisterError] = useState(null)

    const router = useRouter()

    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useValidation(INITIAL_STATE, validateRegister, register)

    useEffect(() => {
        
        if(loading){

            if(error) setRegisterError(error)
            // else router.push("/dashboard")
        }


    }, [loading])

    const {
        name,
        lastName,
        address,
        state,
        city,
        country,
        phone,
        user,
        email,
        password,
        patient,
        doctor
    } = values

    const { birthday, allergies, preconditions, surgeries } = patient
    const { specialty, document } = doctor

    function register() {

        // Si es doctor eliminar la información del paciente y viceversa
        let user = null
        if(type === "doctor"){
            const { patient, doctor: { specialty, document },...rest } = values
            user = {
                ...rest,
                specialty,
                document
            }
        }
        else {
            const { doctor, patient: { birthday, preconditions, surgeries, allergies },...rest } = values
            user = {
                ...rest,
                birthday,
                preconditions,
                surgeries,
                allergies
            }
        }

        dispatch( registerUserAction( user ) )
    }

    const handleType = (e) => {
        saveType(e.target.name);
        handleChange({
            target: {
                name: "type",
                value: e.target.name
            }
        })
    }

    const handleUserType = e => {
        let bridge = {}

        switch (e.target.id) {
            case "patient":

                bridge = {
                    ...patient,
                    [e.target.name]: e.target.value
                }

                handleChange({
                    target: {
                        name: "patient",
                        value: bridge
                    }
                })

                break;

            case "doctor":
                
                bridge = {
                    ...doctor,
                    [e.target.name]: e.target.value
                }

                handleChange({
                    target: {
                        name: "doctor",
                        value: bridge
                    }
                })

                break;
        }
        
    }

    return ( 
        <Layout>

            <h1 
                css = {css`
                    text-align: center;
                    margin-bottom: 2rem;
                `}
            >
                Registro
            </h1>

            <GridForm onSubmit = {handleSubmit}>

                <Field>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value = {name}
                        onChange = {handleChange}
                        placeholder = "Tu Nombre"
                    />
                    { errors.name && <Error>{errors.name}</Error> }
                </Field>


                <Field>
                    <label htmlFor="lastName">Apellidos</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        value = {lastName}
                        onChange = {handleChange}
                        placeholder = "Tus Apellidos"
                    />
                { errors.lastName && <Error>{errors.lastName}</Error> }
                </Field>


                <Field>
                    <label htmlFor="address">Dirección</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        value = {address}
                        onChange = {handleChange}
                        placeholder = "Tu dirección"
                    />
                { errors.address && <Error>{errors.address}</Error> }
                </Field>


                <Field>
                    <label htmlFor="state">Estado</label>
                    <input 
                        type="text" 
                        name="state" 
                        id="state" 
                        value = {state}
                        onChange = {handleChange}
                        placeholder = "Tu Estado"
                    />
                { errors.state && <Error>{errors.state}</Error> }
                </Field>


                <Field>
                    <label htmlFor="city">Municipio</label>
                    <input 
                        type="text" 
                        name="city" 
                        id="city" 
                        value = {city}
                        onChange = {handleChange}
                        placeholder = "Tu Municipio"
                    />
                { errors.city && <Error>{errors.city}</Error> }
                </Field>


                <Field>
                    <label htmlFor="country">País</label>
                    <input 
                        type="text" 
                        name="country" 
                        id="country" 
                        value = {country}
                        onChange = {handleChange}
                        placeholder = "Tu País"
                    />
                { errors.country && <Error>{errors.country}</Error> }
                </Field>

                
                <Field>
                    <label htmlFor="phone">Teléfono</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        value = {phone}
                        onChange = {handleChange}
                        placeholder = "Tu Teléfono"
                    />
                { errors.phone && <Error>{errors.phone}</Error> }
                </Field>


                <Field>
                    <label htmlFor="email">Correo</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value = {email}
                        onChange = {handleChange}
                        placeholder = "Tu correo electrónico"
                    />
                { errors.email && <Error>{errors.email}</Error> }
                </Field>


                <Field>
                    <label htmlFor="user">Usuario</label>
                    <input 
                        type="text" 
                        name="user" 
                        id="user" 
                        value = {user}
                        onChange = {handleChange}
                        placeholder = "Nombre Usuario"
                    />
                { errors.user && <Error>{errors.user}</Error> }
                </Field>


                <Field>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value = {password}
                        onChange = {handleChange}
                        placeholder = "Contraseña"
                    />
                { errors.password && <Error>{errors.password}</Error> }
                </Field>


                <Field
                    css = {css`
                        @media (min-width: 768px) {
                            grid-column: 1/3;
                        }
                    `}
                >
                    <Label htmlFor="patient">Paciente</Label>
                    <input 
                        type="radio" 
                        id="patient" 
                        name="patient" 
                        value={type}
                        onChange = {handleType}
                        checked = {type === "patient"}
                    />
                    <Label htmlFor="doctor">Doctor</Label>
                    <input 
                        type="radio" 
                        id="doctor" 
                        name="doctor" 
                        value={type}
                        onChange = {handleType}
                        checked = {type === "doctor"}
                    />
                </Field>

                { 
                    type === "patient" 
                    ? (
                        <>
                            <Field>
                                <label htmlFor="birthday">Fecha de Nacimiento</label>
                                <input 
                                    type="date" 
                                    name="birthday" 
                                    id="patient" 
                                    value = {birthday}
                                    onChange = {handleUserType}
                                    placeholder = "Fecha de Nacimiento"
                                />
                            { errors.patient && <Error>{errors.patient}</Error> }
                            </Field>


                            <Field>
                                <label htmlFor="allergies">Alergias</label>
                                <input 
                                    type="text" 
                                    name="allergies" 
                                    id="patient" 
                                    value = {allergies}
                                    onChange = {handleUserType}
                                    placeholder = "Fecha de Nacimiento"
                                />
                            </Field>

                            <Field>
                                <label htmlFor="preconditions">Enfermedades cronicas</label>
                                <input 
                                    type="text" 
                                    name="preconditions" 
                                    id="patient" 
                                    value = {preconditions}
                                    onChange = {handleUserType}
                                    placeholder = "Fecha de Nacimiento"
                                />
                            </Field>

                            <Field
                            >
                                <label htmlFor="surgeries">Cirugias</label>
                                <input 
                                    type="text" 
                                    name="surgeries" 
                                    id="patient" 
                                    value = {surgeries}
                                    onChange = {handleUserType}
                                    placeholder = "Cirugias que ha tenido"
                                />
                            </Field>

                            <Field
                            >
                                <input type = "hidden"/>
                            </Field>

                        </>
                    ) 
                    : (
                       <>
                            <Field>
                                <label htmlFor="specialty">Especialidad</label>
                                <input 
                                    type="text" 
                                    name="specialty" 
                                    id="doctor" 
                                    value = {specialty}
                                    onChange = {handleUserType}
                                    placeholder = "Especialidad"
                                />
                            { errors.speciality && <Error>{errors.speciality}</Error> }
                            </Field>


                            <Field>
                                <label htmlFor="document">Número de cédula</label>
                                <input 
                                    type="text" 
                                    name="document" 
                                    id="doctor" 
                                    value = {document}
                                    onChange = {handleUserType}
                                    placeholder = "Número de cedula"
                                />
                            { errors.document && <Error>{errors.document}</Error> }
                            </Field>


                            <Field
                            >
                                <input type = "hidden"/>
                            </Field>

                       </> 
                    ) 
                }

                { registerError && 
                    <Alert
                        css = {css`
                            @media (min-width: 768px) {
                                grid-column: 1/3;
                            }
                        `}
                    >
                        {registerError.message}
                    </Alert> 
                }

                <InputSubmit 
                    css = {css`
                            @media (min-width: 768px) {
                                grid-column: 1/3;
                            }
                        `}
                    type="submit" 
                    value="Entrar"
                    className = "mb-3"
                />
            </GridForm>

        </Layout>
    );
}
 
export default Signup;