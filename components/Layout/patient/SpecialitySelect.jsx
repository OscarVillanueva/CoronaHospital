import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { css } from "@emotion/core";
import axios from '../../../config/axios';

const SpecialitySelect = ({ setSpeciality }) => {

    const [specialities, setSpecialities] = useState([])

    useEffect(() => {

        const fetchSpecialities = async () => {
            const { data } = await axios.get("/specialities")
            setSpecialities(data)
        }

        fetchSpecialities()

    }, [])

    return ( 
        <>
            <label 
                    htmlFor="speciality"
                    css = {css`
                        margin-bottom: 0.5rem;
                        display: block;
                    `}
                >
                    Especialidad
                </label>
    
            <Select
                options = { specialities }
                onChange = { option => setSpeciality(option.title) }
                getOptionValue = { options => options.id}
                getOptionLabel = { options => options.title}
                placeholder = "Seleccione la especialidad"
                noOptionsMessage = { () => "No hay resultados" }
            />
        </>
    );
}
 
export default SpecialitySelect;