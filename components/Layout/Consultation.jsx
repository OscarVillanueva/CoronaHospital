import React from 'react';
import { Card } from '../includes/Card';
import { ButtonLG } from '../includes/Button';

const Consultation = ({consultation}) => {

    const { patient: { name }, symptom, status, id } = consultation

    return ( 
        <Card>
            <div className = "mb-2">
                <p><span>{name}</span></p>
                <p>{symptom}</p>
                <p><span>{status}</span></p>
            </div>
            <ButtonLG>Editar</ButtonLG>
        </Card>
    );
}
 
export default Consultation;