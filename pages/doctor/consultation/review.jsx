import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from "@emotion/core";
import { Container, Grid } from "../../../components/includes/Grid";

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

const Review = () => {
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
                    <div>1</div>
                    <div>2</div>
                </Grid>



            </Container>
        </>
    );
}
 
export default Review;