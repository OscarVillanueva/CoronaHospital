import Head from 'next/head';
import { Global, css } from "@emotion/core";
import "react-vis/dist/styles/plot.scss";
import "leaflet/dist/leaflet.css"
import { Provider } from "react-redux";
import store from '../store';

const Init = props => {

    const { Component, pageProps } = props

    return ( 
        
        <>
            <Global
                styles = {css`

                    :root {
                        --primary: #F48668;
                        --secondary: #F7F0F5;
                        --extra: #F4A698;
                    }

                    html {
                        box-sizing: border-box;
                    }

                    *, *:before, *:after {
                        box-sizing: inherit;
                    }

                    body {
                        font-family: 'Open Sans', sans-serif;
                    }

                    h1,h2,h3 {
                        font-family: 'Rubik', sans-serif;
                    }

                    a {
                        text-decoration: none
                    }

                    img {
                        max-width: 100%;
                    }

                    .container {
                        max-width: 1200px;
                        width: 95%;
                        margin: 0 auto;
                    }

                    .mt-2 {
                        margin-top: 2rem;
                    }
                    .mt-3 {
                        margin-top: 3rem;
                    }
                    .mt-4 {
                        margin-top: 4rem;
                    }

                    .mb-2 {
                        margin-bottom: 2rem;
                    }
                    .mb-3 {
                        margin-bottom: 3rem;
                    }
                    .mb-4 {
                        margin-bottom: 4rem;
                    }

                `}
            />

            <Head>
                <title>Covid's Hospital</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Rubik:wght@400;500&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />

                { false ? (
                    
                    <>
                        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                            crossOrigin=""/>
                        <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
                            integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
                            crossOrigin=""></script>
                    </>
                    
                ) : null }

            </Head>

            <Provider store = {store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
 
export default Init;