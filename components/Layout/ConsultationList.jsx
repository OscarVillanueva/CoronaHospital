import React from 'react';
import { css } from "@emotion/core";
import { Button } from "../includes/Button";
import Consultation from '../Layout/Consultation';
import { Container, Row, ListRow } from "../includes/Grid";

const ConsultationList = () => {
    return ( 
        <Container>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Listado de consultas
            </h1>
    
            <Row>
                <Button>Nuevo</Button>
            </Row>

            <ListRow>
                <Consultation />
                <Consultation />
                <Consultation />
            </ListRow>
            
        </Container>
    );
}
 
export default ConsultationList;