import React from 'react';
import Services from '../components/Layout/doctor/Services';
import ConsultationList from '../components/Layout/ConsultationList';

const useComponent = (id) => {
    let component = null

    switch (id) {
        case "services":
            component = <Services />
            break;

        case "consultationList":
            component = <ConsultationList />
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