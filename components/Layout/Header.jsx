import React from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import Nav from './Nav';

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

const Header = () => {
    return ( 
        
        <header
            css = {css`
                background-color: var(--primary);
                padding: 1.1rem;
            `}
        >

            <HeaderContainer>

                <Bar>

                    <Logo>Covid's Hospital</Logo>
    
                    <Nav />

                </Bar>

            </HeaderContainer>

        </header>

    );
}
 
export default Header;