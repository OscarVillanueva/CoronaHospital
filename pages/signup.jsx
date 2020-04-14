import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/Layout/Layout';
import { Field, InputSubmit, Error } from '../components/includes/Form';

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

const Signup = () => {

    const [type, saveType] = useState("patient")

    const handleType = (e) => {
        saveType(e.target.name);
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

            <GridForm>

                <Field>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tu Nombre"
                    />
                </Field>

                <Field>
                    <label htmlFor="lastName">Apellidos</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tus Apellidos"
                    />
                </Field>

                <Field>
                    <label htmlFor="address">Dirección</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tu dirección"
                    />
                </Field>

                <Field>
                    <label htmlFor="state">Estado</label>
                    <input 
                        type="text" 
                        name="state" 
                        id="state" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tu Estado"
                    />
                </Field>

                <Field>
                    <label htmlFor="city">Municipio</label>
                    <input 
                        type="text" 
                        name="city" 
                        id="city" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tu Municipio"
                    />
                </Field>

                <Field>
                    <label htmlFor="country">Páis</label>
                    <input 
                        type="text" 
                        name="country" 
                        id="country" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tu Páis"
                    />
                </Field>
                
                <Field>
                    <label htmlFor="phone">Teléfono</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tu Teléfono"
                    />
                </Field>

                <Field>
                    <label htmlFor="email">Correo</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        // value = {email}
                        // onChange = {handleChange}
                        placeholder = "Tu correo electrónico"
                    />
                </Field>

                {/* { errors.email && <Error>{errors.email}</Error> } */}

                <Field>
                    <label htmlFor="password">Usuario</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        // value = {password}
                        // onChange = {handleChange}
                        placeholder = "Nombre Usuario"
                    />
                </Field>

                {/* { errors.password && <Error>{errors.password}</Error> } */}

                <Field>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        // value = {password}
                        // onChange = {handleChange}
                        placeholder = "Contraseña"
                    />
                </Field>

                {/* { errors.password && <Error>{errors.password}</Error> } */}

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
                                    id="birthday" 
                                    // value = {password}
                                    // onChange = {handleChange}
                                    placeholder = "Fecha de Nacimiento"
                                />
                            </Field>

                            <Field>
                                <label htmlFor="allergies">Alergias</label>
                                <input 
                                    type="text" 
                                    name="allergies" 
                                    id="allergies" 
                                    // value = {password}
                                    // onChange = {handleChange}
                                    placeholder = "Fecha de Nacimiento"
                                />
                            </Field>

                            <Field>
                                <label htmlFor="preconditions">Enfermedades cronicas</label>
                                <input 
                                    type="text" 
                                    name="preconditions" 
                                    id="preconditions" 
                                    // value = {password}
                                    // onChange = {handleChange}
                                    placeholder = "Fecha de Nacimiento"
                                />
                            </Field>

                            <Field
                            >
                                <label htmlFor="surgeries">Cirugias</label>
                                <input 
                                    type="text" 
                                    name="surgeries" 
                                    id="surgeries" 
                                    // value = {password}
                                    // onChange = {handleChange}
                                    placeholder = "Fecha de Nacimiento"
                                />
                            </Field>

                            <Field
                            >
                                <input type = "hidden"/>
                            </Field>

                            {/* { errors.password && <Error>{errors.password}</Error> } */}
                        </>
                    ) 
                    : (
                       <>
                            <Field>
                                <label htmlFor="specialty">Especialidad</label>
                                <input 
                                    type="text" 
                                    name="specialty" 
                                    id="specialty" 
                                    // value = {password}
                                    // onChange = {handleChange}
                                    placeholder = "Especialidad"
                                />
                            </Field>

                            <Field>
                                <label htmlFor="document">Número de cédula</label>
                                <input 
                                    type="text" 
                                    name="document" 
                                    id="document" 
                                    // value = {password}
                                    // onChange = {handleChange}
                                    placeholder = "Número de cedula"
                                />
                            </Field>

                            <Field
                            >
                                <input type = "hidden"/>
                            </Field>

                            {/* { errors.password && <Error>{errors.password}</Error> } */}
                       </> 
                    ) 
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