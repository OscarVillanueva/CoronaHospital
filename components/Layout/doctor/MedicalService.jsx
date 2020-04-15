import React from 'react';
import styled from '@emotion/styled';
import { ButtonLG } from '../../includes/Button';

const MedicalServiceContainer = styled.div`
    background-color: #f9f9f9;
    width: 100%;
    padding: 1.2rem;
    border-radius: 0.4rem;
    margin-bottom: 2rem;

    span {
        font-weight: bold;
    }

`

const MedicalService = () => {
    return ( 
        <MedicalServiceContainer>
            <div className = "mb-2">
                <p><span>Nombre del servicio</span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore saepe enim ipsum, eum praesentium? Sed provident odit porro distinctio sint neque explicabo, unde quae, eligendi optio corporis atque sit!</p>
                <p><span>$400</span></p>
            </div>
            <ButtonLG>Editar</ButtonLG>
        </MedicalServiceContainer>
    );
}
 
export default MedicalService;