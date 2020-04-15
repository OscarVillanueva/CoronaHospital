import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from "@emotion/core";
import { Container, SpaceArroundRow } from "../../components/includes/Grid";
import { Button } from "../../components/includes/Button";

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

const AddService = () => {
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
    
                        <Logo>Covid's Hospital</Logo>
        
                    </Bar>
    
                </HeaderContainer>
    
            </header>

            <Container>

                <>
                    <h1 css = {css` 
                        text-align:center;
                    `}>
                        Agregar Nuevo Servicio
                    </h1>
                    <Link href = "/dashboard">
                        <Button>Volver</Button>
                    </Link>
                </>

            </Container>

        </>
    );
}
 
export default AddService;