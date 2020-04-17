import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { Row } from "../includes/Grid";
import { Form, Field } from "../includes/Form";

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

    const handleMessage = (e) => {
        e.preventDefault()

        if(message !== "") {
            console.log(message);
            saveMessage("")
        }

    }

    return ( 
        <>
            <h2>Conversación</h2>
    
            <Row>
                <ResponseBubble>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est exercitationem tenetur in modi voluptas debitis quis, sapiente laudantium quae, minus eaque et. Porro eum dolorem nobis ipsum aspernatur ab.
                </ResponseBubble>
            </Row>

            <Bubble>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores voluptatem eos architecto? Quisquam aliquid dolores unde praesentium voluptates! Eligendi quisquam et dolore nostrum? Eligendi molestiae nostrum pariatur error ratione?
            </Bubble>

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