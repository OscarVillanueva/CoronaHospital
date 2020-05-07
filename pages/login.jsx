import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Layout from '../components/Layout/Layout';
import { Form, Field, InputSubmit, FormContainer, Error } from '../components/includes/Form';
import { Alert } from "../components/includes/Alert";
import validateLogin from '../validation/validateLogin';
import useValidation from '../hooks/useValidation';
import { loginAction } from "../actions/authActions";

const INITIAL_STATE = {
    email: "",
    password: ""
}

const Login = () => {

    const [registerError, setRegisterError] = useState(null)
    const [ready, setReady] = useState(false)

    const router = useRouter()

    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useValidation(INITIAL_STATE, validateLogin, login)

    useEffect(() => {
        
        if(!loading && ready){
            if(error) setRegisterError(error)
            else 
                setTimeout(() => {
                    router.push("/dashboard")
                }, 1000);
        }

    }, [loading, ready])

    const { email, password } = values

    function login() {
        setReady(true)
        dispatch( loginAction( values ) )
    }

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

                <Form onSubmit = {handleSubmit}>

                    { registerError && 
                        <Alert>
                            {registerError.message}
                        </Alert> 
                    }

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
                    </Field>

                    { errors.email && <Error>{errors.email}</Error> }
    
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
                    </Field>

                    { errors.password && <Error>{errors.password}</Error> }
    
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