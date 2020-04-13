import React from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import Layout from '../components/Layout/Layout';
import Map from '../components/Layout/Map';

const InfoContainer = styled.div`
    margin: 3rem 0;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`

const Reversed = styled.div`
  @media (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

`

const Home = () => (
  <Layout>
    <div className="container">

      <Title>
        #QuedateEnCasa
      </Title>

      <InfoContainer>

        <Reversed>

          <h2 
            css = {css`
              text-align: center;
            `} 
          >
            Información Reciente
          </h2>

        </Reversed>

        <div>
          <Map />
        </div>

      </InfoContainer>

    </div>
  </Layout>
)

export default Home
