import React from 'react';
import Services from '../components/Layout/doctor/Services';
import ConsultationList from '../components/Layout/ConsultationList';
import Reports from '../components/Layout/Reports';

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
            component = <Reports />
            break;
    
        default:
            break;
    }

    return component ;
}
 
export default useComponent;