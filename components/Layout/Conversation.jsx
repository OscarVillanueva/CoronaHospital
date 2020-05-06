import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { Row } from "../includes/Grid";
import { Form, Field, Error } from "../includes/Form";
import { Alert } from "../includes/Alert";
import { updateConsultationAction } from "../../actions/consultationsAction";

const ResponseBubble = styled.p`
    padding: 0.6rem 1.6rem;
    background-color: var(--primary);
    border-radius: 0.5rem;
    color: var(--secondary);
    width: 70%;
`

const Bubble = styled.p`
    padding: 0.6rem 1.6rem;
    background-color: var(--extra);
    border-radius: 0.5rem;
    color: white;
    width: 70%;
`

const Send = styled.button`
    height: 2.08rem;
    display: block;
    position: absolute;
    right: 0rem;
    background-color: var(--primary);
    top: 0px;
    border-radius: 0 0.2rem 0.2rem 0;
    border: 1px solid var(--primary);
    color: var(--secondary);

    &:hover{
        cursor: pointer;
    }
`

const Conversation = () => {

    const focus = useSelector(state => state.consultations.focus)
    const error = useSelector(state => state.consultations.error)
    const dispatch = useDispatch()
    const [message, saveMessage] = useState("")
    const [newMessage, saveNewMessage] = useState(false)
    const [consultation, saveConsultation] = useState(focus)
    const current = useSelector(state => state.auth.current)
    const { comments } = consultation

    useEffect(() => {
        
        if(newMessage){
            dispatch( updateConsultationAction(consultation) )
            saveNewMessage(false)
        }

    }, [consultation])

    const handleMessage = (e) => {
        e.preventDefault()

        if(message !== "") {
            
            const bridge = [
                ...comments,
                {
                    id: uuid(),
                    message,
                    userId: current.id,
                    name: current.name
                }
            ]

            saveConsultation({
                ...consultation,
                comments: bridge
            })

            saveNewMessage(true)
            saveMessage("")
        }

    }

    return ( 
        <>
            <h2>Conversación</h2>
    
            { comments.length > 0 
                ? (
                    <>
                        {comments.map(comment => {
                            if(comment.userId === current.id) 
                                return (
                                    <Row key = {comment.id}>
                                        <ResponseBubble>
                                            {comment.message}
                                        </ResponseBubble>
                                    </Row>
                                )
                            else 
                                return (
                                    <Bubble>
                                        {comment.name} dice: {comment.message}
                                    </Bubble>
                                )
                        })}
                    </>
                ) 
                : (
                    <Alert>
                        Aún no hay mensajes
                    </Alert>
                ) 
            }

            <div 
                css = {css`
                    margin: 2rem 0;
                `}
            >
                <Form
                    css = {css`
                        position: relative;
                        width: 100%;
                    `}
                    onSubmit = {handleMessage}
                >
                    <Field>
                        <input 
                            type = "text" 
                            name = "comment"
                            id = "comment"
                            placeholder = "Escribe . . ."
                            value = {message}
                            onChange = {e => saveMessage(e.target.value)}
                        />
                    </Field>

                    <Send type = "submit">Enviar</Send>

                    { error && <Error>No se ha podido enviar tu mensaje, intenta más tarde</Error> }
                </Form>
            </div>
        </>
    );
}
 
export default Conversation;