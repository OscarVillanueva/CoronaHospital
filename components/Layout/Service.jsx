import React from 'react';
import styled from '@emotion/styled';

const ServiceContainer = styled.li`
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.08rem;

    a {
        color: var(--secondary);
    }

    @media (min-width: 768px) {
        text-align: start;
    }
    
`

const Service = ({service, updateCurrentComponent}) => {
    return ( 
        <ServiceContainer>
            <a
                href = "#!"
                onClick = {() => updateCurrentComponent(service.component)}
            >
                {service.title}
            </a>
        </ServiceContainer>
    );
}
 
export default Service;