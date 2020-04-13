import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { 
  faHeadSideVirus, 
  faShieldVirus, 
  faSkullCrossbones,
  faLungsVirus,
  faBookDead,
  faVirus,
  faHeadSideMask,
  faSignal
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from '../components/Layout/Layout';
import Selector from '../components/Layout/Selector';

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

const Item = styled.li`
  svg {
    margin-right: 1rem;
  }
`

const Home = () => {

  const [currentCountry, saveCurrentCountry] = useState("MX")
  const [details, saveDetails] = useState({})

  useEffect(() => {
    
    const requestAPI = async () => {
    
      const api = `https://api.thevirustracker.com/free-api?countryTotal=${currentCountry}`

      const result = await fetch(api)
      const data = await result.json()
      
      saveDetails(data.countrydata[0])
            
    }
    
    requestAPI()

  }, [currentCountry])

  
  if(Object.keys(details).length === 0) return null

  const { 
    info: {title}, 
    total_cases, 
    total_recovered, 
    total_deaths,
    total_new_cases_today,
    total_new_deaths_today,
    total_active_cases,
    total_serious_cases,
    total_danger_rank,
  } = details

  return (
    <Layout>
      <div className="container">
  
        <Title>
          #QuedateEnCasa
        </Title>
  
        <Selector 
          selected = {currentCountry} 
          saveCurrentCountry = {saveCurrentCountry}
        />

        <InfoContainer>
  
          <Reversed>
  
            <h2 
              css = {css`
                text-align: center;
              `} 
            >
              Información Reciente
            </h2>

            <h3
              css = {css` 
                font-weight: 400; 
              `}
            >
              Detalles del Covid-19 en {title}
            </h3>

            <ul 
              css = {css`
                list-style: none;
                line-height: 3rem;
              `}
            >
              <Item>
                <FontAwesomeIcon icon={faHeadSideVirus} />
                Total de casos: {total_cases}
              </Item>

              <Item>
                <FontAwesomeIcon icon={faShieldVirus} />
                Recuperados: {total_recovered}
              </Item>

              <Item>
                <FontAwesomeIcon icon={faBookDead} />
                Muertes: {total_deaths}
              </Item>

              <Item>
                <FontAwesomeIcon icon={faLungsVirus} />
                Nuevos casos (Hoy): {total_new_cases_today}
              </Item>

              <Item>
                <FontAwesomeIcon icon={faSkullCrossbones} />
                Muertes (Hoy): {total_new_deaths_today}
              </Item>

              <Item>
                <FontAwesomeIcon icon={faVirus} />
                Casos activos: {total_active_cases}
              </Item>

              <Item>
                <FontAwesomeIcon icon={faHeadSideMask} />
                Casos serios: {total_serious_cases}
              </Item>

              <Item>
                <FontAwesomeIcon icon={faSignal} />
                Ranking: {total_danger_rank}
              </Item>
            </ul>

  
          </Reversed>
  
          <div>
            <h1>Gráfica</h1>
          </div>
  
        </InfoContainer>
  
      </div>
    </Layout>
  )
  
}
export default Home
