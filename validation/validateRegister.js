export default values => {
    let errors = {}

    // validar el email del usuario
    if(values.email.trim() === "") 
        errors.email = "El correo es obligatorio"
    else 
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
            errors.email = "El correo no es válido"

    // Validar el password
    if(values.password.trim() === "")
        errors.password = "El password es obligatorio"
    else
        if(values.password.length < 6)
            errors.password = "El password debe ser de almenos 6 caracteres"

    // validar el nombre
    if(values.name.trim() === "") 
        errors.name = "El nombre es obligatorio"

    // validar el apellidos
    if(values.lastName.trim() === "") 
        errors.lastName = "Los apellidos son obligatorios"

    // validar el direccion
    if(values.address.trim() === "") 
        errors.address = "La dirección es obligatoria"

    // validar el Estado
    if(values.state.trim() === "") 
        errors.state = "El estado es obligatorio"

    // validar el municipio
    if(values.city.trim() === "") 
        errors.city = "El municipio es obligatorio"

    // validar el país
    if(values.country.trim() === "") 
        errors.country = "El país es obligatorio"

    // validar el telefono
    if(values.phone.trim() === "") 
        errors.phone = "El telefono es obligatorio"

    // validar el usuario
    if(values.user.trim() === "") 
        errors.user = "El usuario es obligatorio"

    if(values.type === "patient"){
        // validar la fecha
        if(values.patient.birthday.trim() === "") 
            errors.patient = "La fecha de nacimiento es obligatoria"
    }
    else {
        // validar la especialidad
        if(values.doctor.speciality.trim() === "") 
            errors.speciality = "La especialidad es obligatoria"

        // validar la cedula
        if(values.doctor.document.trim() === "") 
            errors.document = "La cédula es obligatoria"

    }

    return errors
};
