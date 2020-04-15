import React from 'react';
import { css } from "@emotion/core";
import styled from '@emotion/styled';
import SideBar from '../components/Layout/SideBar';
import Layout from '../components/Layout/Layout';

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
    return (

        <DashboardContainer>

            <SideBar />

            <Main>
                <h1>Desde Dashboard</h1>
            </Main>

        </DashboardContainer>
    );
}
 
export default Dashboard;