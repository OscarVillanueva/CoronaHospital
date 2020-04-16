import React from 'react';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { ButtonLG } from '../../includes/Button';
import { Card } from '../../includes/Card';
import { putFocusDataAction } from "../../../actions/doctorActions";

const MedicalService = ({service}) => {

    const { title, details, price, id } = service
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch( putFocusDataAction(service) )
    }

    return ( 
        <Card>
            <div className = "mb-2">
                <p><span>{title}</span></p>
                <p>{details}</p>
                <p><span>${price}</span></p>
            </div>
            <Link href = "/doctor/service/edit/[id]" as = {`/doctor/service/edit/${id}`}>
                <ButtonLG
                    onClick = {handleClick}
                >
                    Editar
                </ButtonLG>
            </Link>
        </Card>
    );
}
 
export default MedicalService;