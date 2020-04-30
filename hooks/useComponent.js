import React from 'react';
import Services from '../components/Layout/doctor/Services';
import ConsultationList from '../components/Layout/ConsultationList';
import Reports from '../components/Layout/Reports';
import Consultations from '../components/Layout/patient/Consultations';

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
    
        case "consultations":
            component = <Consultations />
            break;
    
        default:
            break;
    }

    return component ;
}
 
export default useComponent;