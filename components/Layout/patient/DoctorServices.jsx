import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Card } from '../../includes/Card';
import { SpaceArroundRow, Container } from "../../includes/Grid";
import { 
    faEnvelopeOpenText, faFlask, faFlag, 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.p`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    color: var(--primary)
  }
`

const DoctorServices = ({ services }) => {

    return ( 

        <Container>

            { services.length > 0 
                && (
                    <h3
                        css = {css`
                            text-align: center;
                        `}
                    >
                        Coincidencias
                    </h3>
                ) 
            }
            
            {services.map(service => (
                <Card key = { service.id }>
                    <SpaceArroundRow>
                        <div>
                            <h3>Detalles del servicio</h3>
                            <p><span>{service.title}</span></p>
                            <p>{service.details}</p>
                            <p><span>${service.price}</span></p>
                        </div>
                        <div>
                            <h3>Información del doctor</h3>
                            <p><span>{service.owner.name} {service.owner.lastName}</span></p>
                            <Item>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                {service.owner.email}
                            </Item>
                            <Item>
                                <FontAwesomeIcon icon={faFlask} />
                                {service.owner.speciality}
                            </Item>
                            <Item>
                                <FontAwesomeIcon icon={faFlag} />
                                {service.owner.state}
                            </Item>
                        </div>
                    </SpaceArroundRow>
                </Card>
            ))}
        </Container>

    );
}
 
export default DoctorServices;