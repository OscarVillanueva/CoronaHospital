import React from 'react';
import { Card } from '../includes/Card';
import { ButtonLG } from '../includes/Button';

const Consultation = () => {
    return ( 
        <Card>
            <div className = "mb-2">
                <p><span>Peter Child</span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore saepe enim ipsum, eum praesentium? Sed provident odit porro distinctio sint neque explicabo, unde quae, eligendi optio corporis atque sit!</p>
                <p><span>Pendiente</span></p>
            </div>
            <ButtonLG>Editar</ButtonLG>
        </Card>
    );
}
 
export default Consultation;