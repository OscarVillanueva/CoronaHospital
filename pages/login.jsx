import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/Layout/Layout';
import { Form, Field, InputSubmit, FormContainer, Error } from '../components/includes/Form';

const Login = () => {
    return ( 
        <Layout>

            <FormContainer>

                <h1 
                    css = {css`
                        text-align: center;
                        margin-bottom: 2rem;
                    `}
                >
                    Iniciar Sesión
                </h1>

                <Form>

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
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            // value = {password}
                            // onChange = {handleChange}
                            placeholder = "Contraseña nueva"
                        />
                    </Field>

                    {/* { errors.password && <Error>{errors.password}</Error> } */}
    
                    <InputSubmit 
                        type="submit" 
                        value="Entrar"
                        className = "mt-3"
                    />
    
                </Form>

            </FormContainer>

        </Layout>
    );
}
 
export default Login;