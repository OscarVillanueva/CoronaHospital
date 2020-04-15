import React from 'react';
import Service from './Service';
import styled from '@emotion/styled';

const ServiceListContainer = styled.ul`
    list-style: none;
    padding-left: 0;

    @media (min-width: 768px) {
        padding-left: 1rem;
    }

`

const ServiceList = ({services, updateCurrentComponent}) => {
    return ( 
        <ServiceListContainer>
            {services.map(service => (
                <Service 
                    key = {service.id}
                    service = {service}
                    updateCurrentComponent = {updateCurrentComponent}
                />
            ))}
        </ServiceListContainer>
    );
}
 
export default ServiceList;