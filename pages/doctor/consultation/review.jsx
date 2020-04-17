import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { Container, Grid} from "../../../components/includes/Grid";
import { Field } from "../../../components/includes/Form";
import { ButtonLG } from "../../../components/includes/Button";
import Conversation from '../../../components/Layout/Conversation';
import DashboardHeader from '../../../components/Layout/DashboardHeader';
import useEditor from '../../../hooks/useEditor';

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

    // rich Editor text, Edtr.io, componente
    const { localStorageRefence, component } = useEditor()

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

                            <Label>
                                Covid-19:
                            </Label>

                            <Select name="status" id="status">
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
                                    placeholder = "Escribe . . ."
                                />
                            </Field>

                            <Label>
                                Estado de la consulta: 
                            </Label>

                            <Select name="status" id="status">
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
                                    placeholder = "100"
                                />
                            </Field>

                       </>

                       <>
                           <h1>Recetar</h1>

                           <div 
                                css = {css`
                                    width: 85%;
                                `}
                           >
                               { component }
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
                            
                            <Conversation />

                        </div>

                        <ButtonLG>Actualizar Consulta</ButtonLG>

                    </div>
                </Grid>

            </Container>
        </>
    );
}
 
export default Review;