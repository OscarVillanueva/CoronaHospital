import React from 'react';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { Card } from '../includes/Card';
import { ButtonLG } from '../includes/Button';
import { putFocusDataAction } from "../../actions/consultationsAction";

const Consultation = ({consultation}) => {

    const { patient, symptom, status, id } = consultation

    if(!patient) return null

    const { name } = patient
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch( putFocusDataAction(consultation) )
    }

    return ( 
        <Card>
            <div className = "mb-2">
                <p><span>{name}</span></p>
                <p>{symptom}</p>
                <p><span>{status}</span></p>
            </div>
            <Link href = "/doctor/consultation/review">
                <ButtonLG
                    onClick = {handleClick}
                >
                    Ver más
                </ButtonLG>
            </Link>
        </Card>
    );
}
 
export default Consultation;