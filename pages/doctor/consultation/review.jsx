import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Editor, EditorState } from 'draft-js';
import { css } from "@emotion/core";
import { Container, Grid, Row } from "../../../components/includes/Grid";
import { Form, Field } from "../../../components/includes/Form";

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

const Logo = styled.p`
    color: var(--secondary);
    font-size: 3rem;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    text-align: center;

    @media (min-width: 768px) {
        line-height: 0;
    }
`

const Bar = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

const Label = styled.p`
    font-weight: bold;
    font-size: 1.1rem;
    margin: 2rem 0;

    span {
        font-weight: 400;
    }
`

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
const Review = () => {

    const [message, saveMessage] = useState("")
    const [editorState, saveEditorState] = useState(EditorState.createEmpty())

    const handleMessage = (e) => {
        e.preventDefault()

        if(message !== "") {
            console.log(message);
            saveMessage("")
        }

    }

    return (
        <>
            <header
                css = {css`
                    background-color: var(--primary);
                    padding: 1.1rem;
                `}
            >
    
                <HeaderContainer>
    
                    <Bar>
    
                        <Link href = "/dashboard">
                            <Logo>Covid's Hospital</Logo>
                        </Link>
        
                    </Bar>
    
                </HeaderContainer>
    
            </header>

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
                        `}
                    >
                       <>
                           <h1>Datos del paciente</h1>
    
                            <Label>
                                Nombre: <span>Peter Child</span>
                            </Label>
    
                            <Label>
                                Alergias: <span>Todas</span>
                            </Label>
    
                            <Label>
                                Enfermedades Cronicas: <span>Todas</span>
                            </Label>
    
                            <Label>
                                Cirigías: <span>Me sacon el apendice</span>
                            </Label>
    
                            <Label>
                                Fecha de Nacimiento: <span>20/20/20</span>
                            </Label>
    
                            <Label>
                                Email: <span>correo@correo.com</span>
                            </Label>
                       </>

                       <>
                           <h1>Recetar</h1>

                           <div 
                                css = {css`
                                    width: 85%;
                                `}
                           >
                           </div>
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quisquam in illum voluptate rerum quasi aliquam molestiae ea, sint culpa, nam fugit non quod sapiente alias vero nihil. Atque, quae!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi praesentium blanditiis, in voluptatem numquam, quo ab veniam quod magni modi ipsam aut eligendi pariatur rem voluptatum eaque facilis nihil itaque.
                            </span>
                        </Label>

                        <div>
                            <h2>Conversación</h2>
    
                            <>
                                <Row>
                                    <ResponseBubble>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est exercitationem tenetur in modi voluptas debitis quis, sapiente laudantium quae, minus eaque et. Porro eum dolorem nobis ipsum aspernatur ab.
                                    </ResponseBubble>
                                </Row>
        
                                <Bubble>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores voluptatem eos architecto? Quisquam aliquid dolores unde praesentium voluptates! Eligendi quisquam et dolore nostrum? Eligendi molestiae nostrum pariatur error ratione?
                                </Bubble>
                            </>

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

                        </div>


                    </div>
                </Grid>

            </Container>
        </>
    );
}
 
export default Review;