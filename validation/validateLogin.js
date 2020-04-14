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

    return errors
};
