const useComponent = (id) => {
    let component

    switch (id) {
        case "services":
            component = <h1>Servicios</h1>
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