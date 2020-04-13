import React from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import Nav from './Nav';

const FooterContainer = styled.div`
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
        margin-right: 2rem;
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

const Footer = () => {
    return ( 
        
        <footer
            css = {css`
                background-color: var(--primary);
                padding: 1.1rem;
            `}
        >

            <FooterContainer>

                <Bar>
                    <Nav />

                    <Logo>Covid's Hotel</Logo>
                </Bar>

            </FooterContainer>

        </footer>

    );
}
 
export default Footer;