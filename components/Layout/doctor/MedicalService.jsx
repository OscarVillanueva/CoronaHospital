import React from 'react';
import { ButtonLG } from '../../includes/Button';
import { Card } from '../../includes/Card';

const MedicalService = ({service}) => {

    const { title, details, price } = service

    return ( 
        <Card>
            <div className = "mb-2">
                <p><span>{title}</span></p>
                <p>{details}</p>
                <p><span>${price}</span></p>
            </div>
            <ButtonLG>Editar</ButtonLG>
        </Card>
    );
}
 
export default MedicalService;