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

const Service = ({service}) => {
    return ( 
        <ServiceContainer>
            <a
                href = "#!"
            >
                {service.title}
            </a>
        </ServiceContainer>
    );
}
 
export default Service;