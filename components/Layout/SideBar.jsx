import React from 'react';
import styled from '@emotion/styled';
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

const SideBar = ({updateCurrentComponent}) => {

    const doctor = [
        {
            id: 0,
            title: "Servicios",
            type: "doctor",
            component: "services"
        },
        {
            id: 1,
            title: "Atender consultas",
            type: "both",
            component: "consultationList"
        },
        {
            id: 2,
            title: "Reportes",
            type: "both",
            component: "reports"
        },
    ]

    const patient = [
        {
            id: 0,
            title: "Pedir Consulta",
            type: "patient",
            component: "consultationForm"
        },
        {
            id: 1,
            title: "Buscar",
            type: "patient",
            component: "search"
        },
        {
            id: 2,
            title: "Consultas",
            type: "both",
            component: "consultationList"
        },
        {
            id: 3,
            title: "e-Farmacia",
            type: "both",
            component: "pharmacy"
        },
        {
            id: 4,
            title: "Reportes",
            type: "both",
            component: "reports"
        },
    ]

    const type = "doctor"

    return (
        <SideBarContainer >

            <Logo>Covid's Hospital</Logo>

            <ServiceList 
                services = {type === "doctor" ? doctor : patient} 
                updateCurrentComponent = { updateCurrentComponent }
            />

        </SideBarContainer>
    );
}
 
export default SideBar;