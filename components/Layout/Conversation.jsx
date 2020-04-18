import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "../includes/Grid";
import { Form, Field } from "../includes/Form";
import { Alert } from "../includes/Alert";

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

    const [message, saveMessage] = useState("")
    const focus = useSelector(state => state.consultations.focus)
    const [comments, saveComments] = useState(focus.comments)
    const current = {id: 1, name: "Doctor. House"}

    const handleMessage = (e) => {
        e.preventDefault()

        if(message !== "") {
            saveComments([
                ...comments,
                {
                    message,
                    userId: current.id,
                    name: current.name
                }
            ])
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
                                    <Row>
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
                </Form>
            </div>
        </>
    );
}
 
export default Conversation;