import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";

const Select = styled.select`

    width: 100%;
    display: block;
    padding: 0.4rem;
    -webkit-appearance: none;
    border-radius: 0.4rem;
    border: 1px solid #e1e1e1;
    font-size: 1.1rem;
    margin-top: 1rem;
    
`

const Selector = ({selected, saveCurrentCountry}) => {

    const [countries, saveCountries] = useState([])

    useEffect(() => {

        const requestAPI = async () => {
    
          const api = 'https://api.thevirustracker.com/free-api?countryTotals=ALL'
    
          const result = await fetch(api)
          const data = await result.json()
          
          let i = 1;
          const country = []
    
          while(data.countryitems[0][i]) {
            country.push(data.countryitems[0][i])
            i = i + 1
          }
    
          saveCountries(country);
            
        }
    
        requestAPI()
    }, [])

    const handleChange = (e) => {
        saveCurrentCountry(e.target.value)
    }
    

    return ( 
        <Select 
            name="selector" 
            id="selector" 
            value = {selected}
            onChange = {handleChange}
        >

            {countries.map( country => (
                <option 
                    value = {country.code} 
                    key = {country.ourid} 
                >
                    {country.title}
                </option>
            ))}

        </Select>
    );
}
 
export default Selector;