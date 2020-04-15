import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from "react-redux";
import ServiceList from './ServiceList';

const SideBarContainer = styled.aside`
    background-color: #F48668;
    padding: 1rem;
`

const Logo = styled.p`
    color: var(--secondary);
    font-size: 2.5em;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    text-align: center;
`

const SideBar = () => {

    const { doctor, patient } = useSelector(state => state.dashboard.options)
    const type = "doctor"

    return (
        <SideBarContainer >

            <Logo>Covid's Hospital</Logo>

            <ServiceList 
                services = {type === "doctor" ? doctor : patient} 
            />

        </SideBarContainer>
    );
}
 
export default SideBar;