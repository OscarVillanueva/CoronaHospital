import React from 'react';
import Services from '../components/Layout/doctor/Services';

const useComponent = (id) => {
    let component = null

    switch (id) {
        case "services":
            component = <Services />
            break;

        case "consultationList":
            component = <h1>Lista de consultas</h1>
            break;

        case "reports":
            component = <h1>Reportes</h1>
            break;
    
        default:
            break;
    }

    return component ;
}
 
export default useComponent;