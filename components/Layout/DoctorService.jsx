import React from 'react';
import { css } from "@emotion/core";
import { Card } from "../includes/Card";

const DoctorService = ({ service }) => {

    const { title, price, details, owner: { name, lastName, email, state, speciality } } = service

    return ( 
        <Card>
            <div css = { css` padding: 1rem; ` }>
                <div>
                    <p><span>{title}</span></p>
                    <p>{details}</p>
                    <p><span>${price}</span></p>
                </div>
                <div>
                    <div>
                        <p><span>{name} {lastName}</span></p>
                        <p>{email}</p>
                        <p>{state}</p>
                        <p>Especialida: {speciality}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
 
export default DoctorService;