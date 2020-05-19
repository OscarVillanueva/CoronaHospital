import React from 'react';
import Service from './Service';
import styled from '@emotion/styled';
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logOutAction } from "../../actions/authActions";
import { updateCurrentComponentAction } from "../../actions/dashboardActions";

const ServiceListContainer = styled.ul`
    list-style: none;
    padding-left: 0;

    @media (min-width: 768px) {
        padding-left: 1rem;
    }

`

const Item = styled.li`
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.08rem;

    a {
        color: var(--secondary);
        cursor: pointer;
    }

    @media (min-width: 768px) {
        text-align: start;
    }
`

const ServiceList = ({ services }) => {

    const dispatch = useDispatch()
    const router = useRouter()

    const logout = () => {
        dispatch( logOutAction() )
        dispatch( updateCurrentComponentAction("") )
        router.push("/login")
    }

    return ( 
        <ServiceListContainer>
            {services.map(service => (
                <Service 
                    key = {service.id}
                    service = {service}
                />
            ))}

            <Item>
                <a 
                    href = "https://efarmacia.now.sh/"
                    target = "_blank"
                >
                    eFarmacia
                </a>
            </Item>

            <Item>
                <a 
                    onClick = { logout }
                >
                    Salir
                </a>
            </Item>
            

        </ServiceListContainer>
    );
}
 
export default ServiceList;