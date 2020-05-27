import React, { useEffect } from 'react';
// import L from 'leaflet';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { useRouter } from "next/router";
import { Container } from "../includes/Grid";
import axios from '../../config/axios';
import firebase from '../../firebase/firebase';

const MapContainer = styled.div`
    width: 100%;
    height: 10rem;

    @media (min-width: 768px) {
        height: 40rem;
    }

`

const Map = () => {

    const router = useRouter()

    useEffect(() => {

        const fetchCases = async () => {
            // const { data } = await axios.get("/users?covid_ne=free")

            // Descargamos a los pacientes
            const patients = await firebase.fetchWhere("users", "type", "==", "patient")
            
            // Filtramos, no se filtra con filter porque no se deja jejej
            const data = []

            patients.forEach(patient => {
                if(patient.data().covid === "suspect" || patient.data().covid === "infected")
                    data.push({ id: patient.id, ...patient.data() })

            });


            initMap(data)
        }

        fetchCases()

    }, [])  

    const initMap = (markers) => {
        const map = L.map('map', {
            center: [23.3136164, -111.6523228],
            zoom: 5,
            zoomControl: false
        })

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        }).addTo(map);

        const markersLayer = new L.LayerGroup()
        
        markers.forEach(marker => {
            const iconUrl = marker.covid === "suspect" ? "suspect.png" : "infected.png"
            const text = marker.covid === "suspect" ? "Sospechoso" : "Confirmado"

            let icon = L.icon({
                iconUrl,
                iconSize: [23.25, 32]
            })
            
            L.marker([marker.geometry.lat, marker.geometry.lng], {
                icon
            }).bindPopup(text).addTo(markersLayer);
        });

        map.addLayer(markersLayer)
    }

    return ( 
        <Container>

            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Infectados y sospechos reportados por nuestro sistema
            </h1>

            <MapContainer id = "map" />
        </Container>
    );
}
 
export default Map;