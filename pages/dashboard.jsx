import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import SideBar from '../components/Layout/SideBar';
import useComponent from '../hooks/useComponent';

const DashboardContainer = styled.div`
    @media (min-width: 768px) {
        display: flex;
        min-height: 100vh;

        aside {
            flex: 0 0 20%;
        }

        main {
            flex: 1;
        }
    }
`

const Main = styled.main`
    padding: 1rem;
`

const Welcome = styled.div`

    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: var(--primary);

    h1 {
        font-size: 5rem;
        text-align:  center;
        margin-bottom: 0;
    }   

    p {
        text-align: center;
        font-size: 1.5em;
    }
`

const Dashboard = () => {

    const currentComponent = useSelector(state => state.dashboard.currentComponent)
    const current = useSelector(state => state.auth.current)
    const loading = useSelector(state => state.auth.loading)

    const router = useRouter()
    
    const [component, updateComponent] = useState(null)

    useEffect(() => {
        
        updateComponent(useComponent(currentComponent))

    }, [currentComponent])


    useEffect(() => {

        if(!loading && !current) router.push("/login")
        
    }, [loading])

    return (

        <DashboardContainer>

            <SideBar />

            <Main>
                { !component 
                    ? (
                        <Welcome>
                            <h1>¡Bienvenido!</h1>
                            <div>
                                <p>Selecciona una opción para comenzar</p>
                            </div>
                        </Welcome>
                    )
                    : component
                }
            </Main>

        </DashboardContainer>
    );
}
 
export default Dashboard;