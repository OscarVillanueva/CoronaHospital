import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from "react-redux";
import { updateCurrentComponentAction } from "../../actions/dashboardActions";

const ServiceContainer = styled.li`
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.08rem;

    a {
        color: var(--secondary);
    }

    a:hover {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        text-align: start;
    }
    
`

const Service = ({ service }) => {

    const dispatch = useDispatch()

    const updateCurrentComponent = componentID => dispatch( updateCurrentComponentAction( componentID ) )

    return ( 
        <ServiceContainer>
            <a
                onClick = {() => updateCurrentComponent(service.component)}
            >
                {service.title}
            </a>
        </ServiceContainer>
    );
}
 
export default Service;