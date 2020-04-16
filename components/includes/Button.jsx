import styled from '@emotion/styled';

export const Button = styled.a`
    background-color: var(--primary);
    padding: 0.7rem 1.7rem;
    border-radius: 0.2rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
`
export const ButtonLG = styled.a`
    background-color: var(--primary);
    padding: 0.7rem 1.7rem;
    border-radius: 0.2rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    display: block;
    text-align: center;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`

export const DangerButtonLG = styled.a`
    background-color: #d9534f;
    padding: 0.7rem 1.7rem;
    border-radius: 0.2rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    display: block;
    text-align: center;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`