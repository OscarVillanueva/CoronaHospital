import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SideBar from '../components/Layout/SideBar';
import useComponent from '../hooks/useComponent';

const DashboardContainer = styled.div`
    @media (min-width: 768px) {
        display: flex;
        min-height: 100vh;

        aside {
            flex: 0 0 20%;
        }

        section {
            flex: 1;
        }
    }
`

const Main = styled.section`
    padding: 1rem;
`

const Dashboard = () => {

    const [currentComponent, updateCurrentComponent] = useState("services")
    const [component, updateComponent] = useState(null)

    useEffect(() => {
        
        updateComponent(useComponent(currentComponent))

    }, [currentComponent])

    return (

        <DashboardContainer>

            <SideBar 
                updateCurrentComponent = { updateCurrentComponent }
            />

            <Main>
                {component}
            </Main>

        </DashboardContainer>
    );
}
 
export default Dashboard;