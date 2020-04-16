import React from 'react';
import moduleName from 'react-redux';
import { Card } from '../includes/Card';
import { ButtonLG } from '../includes/Button';

const Consultation = ({consultation}) => {

    const { patient, symptom, status, id } = consultation

    if(!patient) return null

    const { name } = patient

    return ( 
        <Card>
            <div className = "mb-2">
                <p><span>{name}</span></p>
                <p>{symptom}</p>
                <p><span>{status}</span></p>
            </div>
            <ButtonLG>Ver más</ButtonLG>
        </Card>
    );
}
 
export default Consultation;