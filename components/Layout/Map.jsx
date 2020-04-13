import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const MapContainer = styled.div`
    width: 100%;
    height: 10rem;

    @media (min-width: 768px) {
        height: 40rem;
    }

`

const Map = () => {

    useEffect(() => {

        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

    }, [])  

    return ( 
        <MapContainer id = "map" />
    );
}
 
export default Map;