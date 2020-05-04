export default values => {
    let errors = {}

    // validar la consulta del usuario
    if(values.symptom.trim() === "") 
        errors.symptom = "Los sintomas son obligatorios"

    // Validar la especialidad
    if(values.speciality.trim() === "")
        errors.speciality = "La especialidad es obligatoria"

    return errors
};
