export default values => {
    let errors = {}

    // validar el nombre del titulo
    if(values.title.trim() === "") 
        errors.title = "El nombre del servicio es obligatorio"

    // Validar los detalles
    if(values.details.trim() === "")
        errors.details = "Los detalles del servicio es obligatorio"
        
    // validar el precio
    if(Number(values.price) <= 0) 
        errors.price = "Ingresa un precio válido"

    return errors
};
