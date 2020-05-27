import React from 'react';
import Services from '../components/Layout/doctor/Services';
import CheckConsultations from '../components/Layout/doctor/CheckConsultations';
import Reports from '../components/Layout/doctor/Reports';
import Consultations from '../components/Layout/patient/Consultations';
import CreateConsultation from '../components/Layout/patient/CreateConsultation';
import Statistics from '../components/Layout/patient/Statistics';
import Search from '../components/Layout/patient/Search';

const useComponent = (id) => {
    let component = null

    switch (id) {
        case "services":
            component = <Services />
            break;

        case "checkConsultation":
            component = <CheckConsultations />
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

        case "statistics":
            component = <Statistics />
            break;

        case "search":
            component = <Search />
            break;
    
        default:
            break;
    }

    return component ;
}
 
export default useComponent;