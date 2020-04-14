import { useState, useEffect } from 'react';

const useValidation = (initialState, validation, action) => {

    const [values, saveValues] = useState(initialState)
    const [errors, saveErrors] = useState({})
    const [submitForm, saveSubmitForm] = useState(false)

    useEffect(() => {
        
        if(submitForm){

            const noError = Object.keys(errors).length === 0
            
            if(noError){
                // Funcion que se ejecuta en el componente
                action()
            }

            saveSubmitForm(false)

        }

    }, [errors])

    // función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        saveValues({
            ...values,
            [e.target.name]: e.target.value
        })   
    }

    // Función que se ejecuta cuando el usario hace submit
    const handleSubmit = e => {
        e.preventDefault()
        
        const errorsValidation = validation(values)
        saveErrors(errorsValidation)
        saveSubmitForm(true)

    }

    // Cuando se realiza el evento de blur
    const handleBlur = () => {
        const errorsValidation = validation(values)
        saveErrors(errorsValidation)
    }

    return {
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    }
}
 
export default useValidation;