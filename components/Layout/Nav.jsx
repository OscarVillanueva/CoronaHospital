import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Navigation = styled.nav`
    padding-left: 2rem;
    margin: 2rem 0;

    a {
        font-size: 1.3rem;
        margin-left: 2rem;
        color: var(--secondary);
        font-family: "PT Sans", sans-serif;

        @media (min-width: 768px) {
            margin: 0;
        }

        &:last-of-type {
            margin-right: 0;
        }
    }
`

const Nav = () => {


    return ( 
        <Navigation>
            <Link href = "/login"><a>Entrar</a></Link>
            <Link href = "/signup"><a>Crear Cuenta</a></Link>
        </Navigation>
    );
}
 
export default Nav;