import React from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { Button } from "../../includes/Button";
import MedicalService from './MedicalService';

const ServicesContainer = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
`

const Row = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content: end;
    }

`

const ListRow = styled.div`
    width: 90%;
    margin: 2rem auto;
`

const Services = () => {
    return ( 
        <ServicesContainer>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Servicios
            </h1>
    
            <Row>
                <Button>Nuevo</Button>
            </Row>

            <ListRow>
                <MedicalService />
                <MedicalService />
                <MedicalService />
            </ListRow>

        </ServicesContainer>
    );
}
 
export default Services;