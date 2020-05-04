import React from 'react';
import Services from '../components/Layout/doctor/Services';
import ConsultationList from '../components/Layout/ConsultationList';
import Reports from '../components/Layout/Reports';
import Consultations from '../components/Layout/patient/Consultations';
import CreateConsultation from '../components/Layout/patient/createconsultation';

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

        case "createconsultation":
            component = <CreateConsultation />
            break;
    
        default:
            break;
    }

    return component ;
}
 
export default useComponent;