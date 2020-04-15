import React from 'react';
import Service from './Service';
import { css } from "@emotion/core";
import styled from '@emotion/styled';

const ServiceListContainer = styled.ul`
    list-style: none;
    padding-left: 0;

    @media (min-width: 768px) {
        padding-left: 1rem;
    }

`

const ServiceList = ({services}) => {
    return ( 
        <ServiceListContainer>
            {services.map(service => (
                <Service 
                    key = {service.id}
                    service = {service}
                />
            ))}
        </ServiceListContainer>
    );
}
 
export default ServiceList;